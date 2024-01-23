import prisma from "@/prisma/client";
import React from "react";
import { ApplierList } from "./_components/ApplierList";

const Appliers = async ({ searchParams }: any) => {
  let data: any;
  try {
    data = await prisma?.jobListing.findFirst({
      where: {
        id: searchParams.id,
      },
      include: {
        applications: {
          include: {
            JobSeeker: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Job Title: {data.title}</h1>
        <p className="text-lg text-gray-700">Category: {data.jobCategory}</p>
        <p className="text-md mt-4">{data.description}</p>
      </div>
      <ApplierList data={data} />
    </div>
  );
};

export default Appliers;
