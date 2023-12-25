import { Button } from "@/components/ui/button";
import { HiOutlineCalendar } from "react-icons/hi";
import Image from "next/image";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
interface JobItems {
  Employer: any;
  id: string;
  title: string;
  salary: number;
  description: string;
  created: string;
  jobCategory: string;
  location: string;
  workType: string;
}
const JobItem = ({
  Employer,
  id,
  title,
  salary,
  description,
  created,
  jobCategory,
  location,
  workType,
}: JobItems) => {
  return (
    <div className="flex flex-col rounded-sm cursor-pointer p-2 w-full shadow-md dark:shadow-gray-900">
      {/* title  */}
      <div className="flex space-x-3 py-2">
        {/* logo  */}

        <Image
          src={Employer?.logo}
          className="rounded-md border border-gray-500 object-cover"
          height={80}
          width={66}
          alt="logo"
        />

        <div className="flex flex-col">
          <h1 className="text-sm dark:text-gray-300">
            {Employer?.companyName}
          </h1>
          <h1 className="text-lg font-serif font-bold">{title}</h1>
        </div>
      </div>
      <hr />
      <div className="flex space-x-2 mt-3">
        <span className="flex dark:text-white text-black items-center gap-x-1">
          <HiLocationMarker /> {location}
        </span>
        <span className="flex dark:text-white text-black items-center gap-x-1">
          <HiClock /> {workType}
        </span>
        <span className="flex items-center gap-x-2">
          <HiOutlineCalendar />

          {new Date(created).toDateString()}
        </span>
        <span className="flex dark:text-white text-black items-center gap-x-1">
          <FaMoneyBillWave /> {salary}
        </span>
      </div>
      <div>
        <p className="mt-2 truncate">{description}</p>
        <span className=" float-left mt-2 font-serif italic p-2 bg-green-900 rounded-full text-white">
          {jobCategory}
        </span>
        <Button
          size={"sm"}
          className="transition-all duration-300 my-2 float-right "
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default JobItem;
