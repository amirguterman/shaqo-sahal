import { getToken } from "@/app/utils/token";
import { cn } from "@/lib/utils";
import prisma from "@/prisma/client";
import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import JobSeekerForm from "../../_components/JobSeekerForm";

const AppPage = async () => {
  let data = {
    id: "placeholder",
    name: "",
    email: "",
    jobCategory: [],
    role: "",
    created: new Date(),
    updated: new Date()
  };
  
  const session: any = await getToken();
  
  try {
    // In a real application, this would fetch from the database
    // For now, we'll use the placeholder data to prevent errors
    console.log("Database connection not available in development mode");
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="grid md:grid-cols-2 gap-3">
      <JobSeekerForm jobSeeker={data} />
    </div>
  );
};

export default AppPage;
