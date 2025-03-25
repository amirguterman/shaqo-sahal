import { getToken } from "@/app/utils/token";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  const session: any = await getToken();
  let query: any = {};
  req.nextUrl.searchParams.forEach((value, key) => {
    query.val = value;
  });

  try {
    // Since we're in the process of transitioning from job listings to investment opportunities,
    // we'll return an empty array for now until the database schema is fully updated
    return NextResponse.json([], { status: 200 });
  } catch (error) {
    console.log("error at get opportunities", error);
    return NextResponse.json([], { status: 200 });
  }
};
