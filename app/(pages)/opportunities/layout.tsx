import React from "react";
import AllOpportunities from "./_components/AllOpportunities";
import Filters from "./_components/Filters";
import Nav from "@/app/components/Nav";

export default function OpportunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="fixed bg-white dark:bg-gray-950 dark:shadow-gray-900 z-50 top-0 inset-x-0">
        <Nav />
      </div>
      <div className="pt-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/4 w-full">
            <div className="sticky top-24">
              <Filters />
            </div>
          </div>
          <div className="md:w-3/4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}