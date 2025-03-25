"use client";
import { API } from "@/lib/config";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import OpportunitySkeleton from "@/app/(pages)/opportunities/_components/OpportunitySkeleton";
import OpportunityItem from "@/app/(pages)/opportunities/_components/OpportunityItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const AllOpportunities = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("value");

  useQuery({
    queryKey: ["opportunities"],
    queryFn: () =>
      axios
        .get(value ? `${API}/api/opportunities?val=${value}` : `${API}/api/opportunities`)
        .then((res: any) => {
          setData(res.data);
          return res.data;
        }),
    staleTime: 0,
    gcTime: 0,
    retry: 3,
  });

  const searchOpportunities = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${API}/api/opportunities/search`, {
        title: search,
      });
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between py-3 px-3">
        <div className="flex items-center gap-x-3">
          <Input
            className="w-full md:w-[20rem]"
            placeholder="Search opportunities"
            onChange={(e: any) => {
              setSearch(e.target.value);
            }}
          />
          <Button
            onClick={searchOpportunities}
            className="bg-main-900 dark:bg-main-100 hover:bg-main-950 dark:hover:bg-main-50 transition-all duration-300"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="px-3">
        <div className="flex items-center justify-between">
          <h3 className="my-2 text-2xl dark:gray-400 font-semibold overflow-y-auto">
            {data?.length} Opportunities Found
          </h3>
        </div>
        {isLoading ? (
          <OpportunitySkeleton />
        ) : (
          data?.map((opportunity: any) => <OpportunityItem key={opportunity.id} {...opportunity} />)
        )}
      </div>
    </div>
  );
};

export default AllOpportunities;