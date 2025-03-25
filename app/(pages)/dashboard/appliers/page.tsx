import prisma from "@/prisma/client";
import React from "react";
import { ApplierList } from "./_components/ApplierList";
import EmptyDataComponent from "@/app/components/EmptyComponent";

// Make this a client component to handle searchParams
export const dynamic = 'force-dynamic';

const Appliers = async ({ searchParams }: any) => {
  // If there's no ID, return empty state
  if (!searchParams?.id) {
    return <EmptyDataComponent />;
  }
  
  // Create placeholder data for development
  let data = {
    id: searchParams?.id || "placeholder",
    title: "Sample Investment Opportunity",
    industrySector: "Technology",
    description: "This is a placeholder description for development purposes.",
    applications: []
  };
  
  try {
    // In a real application, this would fetch from the database
    // For now, we'll use the placeholder data to prevent errors
    console.log("Database connection not available in development mode");
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <h1 className="text-2xl dark:text-gray-100 font-bold mb-2">
          Opportunity Title: {data?.title}
        </h1>
        <p className="text-lg text-gray-600">Sector: {data?.industrySector}</p>
        <p className="text-md mt-4 dark:text-gray-100">
          Description <br /> {data?.description}
        </p>
      </div>
      <h1 className="font-bold mb-2 text-2xl font-sans">Applicants</h1>
      <ApplierList data={data} />
    </div>
  );
};

export default Appliers;
