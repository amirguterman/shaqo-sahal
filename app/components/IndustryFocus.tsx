import React from "react";

const IndustryFocus = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center">Industry Sectors</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Dynamic data will be added from API */}
        <div className="p-4 border rounded-lg hover:shadow-md transition cursor-pointer">
          <h3 className="font-medium">Fintech</h3>
          <p className="text-sm text-gray-500 mt-2">5 specializations</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition cursor-pointer">
          <h3 className="font-medium">Healthtech</h3>
          <p className="text-sm text-gray-500 mt-2">3 specializations</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition cursor-pointer">
          <h3 className="font-medium">Edtech</h3>
          <p className="text-sm text-gray-500 mt-2">4 specializations</p>
        </div>
      </div>
    </div>
  );
};

export default IndustryFocus;
