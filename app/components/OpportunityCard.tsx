"use client";
import React from "react";
import { getDaysLeft } from "../utils/daysLeft";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { API } from "@/lib/config";
import Link from "next/link";
interface OpportunityCard {
  title: string;
  Investor: any;
  investmentStage: string;
  location: string;
  fundingType: string;
  fundingAmount: number;
  industrySector: string;
  deadline: any;
  id: string;
}
const OpportunityCard = ({
  id,
  title,
  Investor,
  investmentStage,
  location,
  fundingAmount,
  industrySector,
  fundingType,
  deadline,
}: OpportunityCard) => {
  const { data: session }: any = useSession();

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(API + "/startup/proposal/" + id)}
      // href={`${API}/startup/proposal/${id}`}
      className={`p-4 rounded-md cursor-pointer shadow 
        dark:shadow-gray-700
      `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">
        by <span className="font-bold">{Investor?.fundName}</span> in{" "}
        <span className="text-green-500">{industrySector}</span>
      </p>
      <div className="flex items-center justify-start space-x-2 py-4">
        <span
          className={`px-2 py-1 rounded-lg text-purple-500 bg-purple-200
          `}
        >
          {investmentStage}
        </span>
        <span className="text-green-500 px-2 py-1 rounded-lg bg-green-100">
          {location}
        </span>
        <p className="text-green-500 px-2 py-1 rounded-lg bg-green-100">
          ${fundingAmount?.toLocaleString() || 0}/{fundingType || 'one-time'}
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-500">
          {getDaysLeft(deadline)} days left to apply
        </p>
      </div>
    </div>
  );
};

export default OpportunityCard;
