import React from "react";
import Dropdown from "./Dropdown";

const RegionFilter = () => {
  return (
    <div>
      <div className="d-flex my-3">
        <div className="row w-100">
          <label className="px-5 mb-3">Region</label>
          <div className="col-6 px-4">
            <Dropdown name={"City"} />
          </div>
          <div className="col-6 px-4">
            <Dropdown badge={true} />
          </div>
        </div>
      </div>
      <div className="d-flex my-3">
        <div className="row w-100">
          <div className="col-6 px-4">
            <Dropdown name={"Province"} />
          </div>
          <div className="col-6 px-4">
            <Dropdown badge={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionFilter;
