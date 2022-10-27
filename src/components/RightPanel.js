import React from "react";
import CustomerFilter from "./CustomerFilter";
import RegionFilter from "./RegionFilter";

const RightPanel = () => {
  return (
    <div className="bg-white card p-2 border-0">
      <div className="card-header border-0 bg-secondary">
        <p className="mb-0">Condition</p>
      </div>
      <RegionFilter />
      <CustomerFilter />
    </div>
  );
};

export default RightPanel;
