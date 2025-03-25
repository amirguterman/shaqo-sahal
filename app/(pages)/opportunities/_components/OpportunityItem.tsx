"use client";
import { API } from "@/lib/config";
import { getDaysLeft } from "@/app/utils/daysLeft";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface OpportunityItemProps {
  Investor: any;
  title: string;
  description: string;
  id: string;
  created: string;
  industrySector: string;
  location: string;
  investmentStage: string;
  fundingAmount: number;
  fundingType: string;
  deadline: string;
}

const OpportunityItem = ({
  Investor,
  title,
  description,
  id,
  created,
  industrySector,
  location,
  investmentStage,
  fundingAmount,
  fundingType,
  deadline,
}: OpportunityItemProps) => {
  const router = useRouter();
  const { data: session }: any = useSession();

  const handleClick = () => {
    if (session?.user?.type === "investor") {
      router.push("/dashboard/opportunity/" + id);
    } else {
      router.push(API + "/startup/proposal/" + id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow mb-4"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700">
            by <span className="font-bold">{Investor?.fundName}</span> in{" "}
            <span className="text-green-500">{industrySector}</span>
          </p>
          <p className="text-gray-600 line-clamp-2">{description}</p>
        </div>
        {Investor?.logo && (
          <div className="flex-shrink-0">
            <Image
              src={Investor.logo.url}
              alt={Investor.fundName}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-2 py-1 rounded-lg text-purple-500 bg-purple-100">
          {investmentStage}
        </span>
        <span className="px-2 py-1 rounded-lg text-blue-500 bg-blue-100">
          {location}
        </span>
        <span className="px-2 py-1 rounded-lg text-green-500 bg-green-100">
          ${fundingAmount?.toLocaleString() || 0}/{fundingType || 'one-time'}
        </span>
      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <p>{getDaysLeft(deadline)} days left to apply</p>
        <p>Posted {new Date(created).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default OpportunityItem;