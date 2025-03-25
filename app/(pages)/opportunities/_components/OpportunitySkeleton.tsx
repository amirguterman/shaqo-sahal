import React from "react";

const OpportunitySkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="p-4 border rounded-md animate-pulse space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="flex space-x-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/6"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/6"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/5"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpportunitySkeleton;