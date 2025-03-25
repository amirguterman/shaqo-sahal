"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React from "react";

const Filters = () => {
  const router = useRouter();
  return (
    <div className="space-y-5 p-3">
      {/* Reset Filter */}
      <div className="flex items-center justify-between">
        <h1 className="font-mono italic text-2xl font-bold leading-[3rem]">
          Filters
        </h1>
        <Button
          onClick={() => {
            router.push("/opportunities");
            router.refresh();
          }}
          className="bg-main-900 dark:bg-main-100 hover:bg-main-950 dark:hover:bg-main-50 transition-all duration-300"
        >
          Reset
        </Button>
      </div>
      {/* Date Posted */}
      <div className="flex items-start flex-col gap-3">
        <h1 className="font-mono italic text-2xl font-bold leading-[3rem]">
          Date Posted
        </h1>
        <Select
          onValueChange={(e) => {
            router.push(`/opportunities/time?time=${e}`);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Investment Stages */}
      <div className="flex items-start flex-col gap-3 overflow-y-auto">
        <h1 className="font-mono italic text-2xl font-bold leading-[3rem]">
          Investment Stages
        </h1>
        <Select
          onValueChange={(e) => {
            router.push(`/opportunities/stage?stage=${e}`);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seed">Seed</SelectItem>
            <SelectItem value="early">Early Stage</SelectItem>
            <SelectItem value="growth">Growth</SelectItem>
            <SelectItem value="expansion">Expansion</SelectItem>
            <SelectItem value="late">Late Stage</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Funding Types */}
      <div className="flex items-start flex-col gap-3 overflow-y-auto">
        <h1 className="font-mono italic text-2xl font-bold leading-[3rem]">
          Funding Types
        </h1>
        <Select
          onValueChange={(e) => {
            router.push(`/opportunities/funding?type=${e}`);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="equity">Equity</SelectItem>
            <SelectItem value="debt">Debt</SelectItem>
            <SelectItem value="grant">Grant</SelectItem>
            <SelectItem value="convertible">Convertible Note</SelectItem>
            <SelectItem value="revenue">Revenue Sharing</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;