"use client";
import React from "react";
import OpportunityCard from "./OpportunityCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "@/lib/config";
import Loading from "./Loading";
export default function InvestmentOpportunities() {
  const { data, isLoading } = useQuery({
    queryKey: ["investmentOpportunities"],
    queryFn: () =>
      axios.get(`${API}/api/investor/opportunities/all`).then((res) => res.data),
    staleTime: 0,
    gcTime: 0,
    retry: 3,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="px-10 py-16">
      <h1 className="md:text-3xl font-medium text-gray-800 font-sans dark:text-gray-100">
        Investment Opportunities
      </h1>
      <div className="flex items-center justify-between text-gray-600  py-3 md:text-xl">
        <div className="flex space-x-3">
          <p>{data?.length ?? 0} opportunities available</p>
          <p>
            {
              data?.filter(
                (d: any) =>
                  new Date(d.created).toDateString() ==
                  new Date().toDateString()
              )?.length ?? 0
            }{" "}
            added today .
          </p>
        </div>
        <Link
          className="text-lg font-sans hover:border-b-2 border-main-400 duration-300"
          href={"/opportunities"}
        >
          View All Opportunities
        </Link>
      </div>
      <div className="px-3">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {data?.map((job: any, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <OpportunityCard key={job.id} {...job} />
                </div>
              </CarouselItem>
            )) || []}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
