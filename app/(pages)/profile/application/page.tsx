import { getToken } from "@/app/utils/token";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import prisma from "@/prisma/client";
import { AiFillSchedule } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { RiPassPendingFill } from "react-icons/ri";
import EmptyDataComponent from "@/app/components/EmptyComponent";

const AppPage = async () => {
  let data: any = [];
  const session: any = await getToken();
  
  try {
    // In a real application, this would fetch from the database
    // For now, we'll return an empty array to prevent errors
    console.log("Database connection not available in development mode");
  } catch (error) {
    console.log(error);
  }
  
  // Always return the empty data component during development
  return <EmptyDataComponent />;
};

export default AppPage;
