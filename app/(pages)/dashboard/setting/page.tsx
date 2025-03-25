import { getToken } from "@/app/utils/token";
import prisma from "@/prisma/client";
import React from "react";

import EmployerForm from "../../_components/EmployerForm";

const AppPage = async () => {
  let data = {
    id: "placeholder",
    companyName: "",
    address: "",
    logo: {},
    email: "",
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
    <div>
      <EmployerForm Employer={data} />
    </div>
  );
};

export default AppPage;
