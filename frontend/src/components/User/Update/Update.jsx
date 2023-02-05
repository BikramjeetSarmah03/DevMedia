import React from "react";
import Sidebar from "./Sidebar";

const Update = ({ children, activeTab }) => {
  return (
    <>
      <div className="mx-auto my-24 xl:w-2/3 sm:pr-14 sm:pl-8">
        <div className="flex w-full bg-white border rounded">
          <Sidebar activeTab={activeTab} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Update;
