import { getToken } from "@/app/utils/token";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body: any = await req.json();

  const { user }: any = await getToken();
  if (!user) return NextResponse.json("not authenticated", { status: 500 });
  try {
    const newJobSeeker = await prisma?.jobSeeker.create({
      data: {
        name: body.name,
        jobCategory: body.jobCategory,
        email: user?.email,
        role: body.role,
      },
    });
    if (!newJobSeeker) return NextResponse.json("error", { status: 500 });

    await prisma.user.update({
      data: {
        type: "jobSeeker",
      },
      where: {
        email: user?.email,
      },
    });
    return NextResponse.json(newJobSeeker, { status: 201 });
  } catch (error: any) {
    // The .code property can be accessed in a type-safe manner
    if (error.code === "P2002") {
      return NextResponse.json(
        "Already exists this email please use another email",
        { status: 400 }
      );
    } else {
      return NextResponse.json("unkown error", { status: 500 });
    }
  }
};
