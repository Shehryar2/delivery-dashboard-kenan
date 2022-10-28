import React from "react";
import Dropdown from "./Dropdown";
import DropdownChip from "./Dropdown-chip";

const RegionFilter = () => {
  return (
    <div>
        <div className="row">
          <h3 className="mb-3">Region</h3>
          <div className="col-md-6 mb-3">
            <Dropdown name={"City"} />
          </div>
          <div className="col-md-6 mb-3">
            <DropdownChip badge={true} />
          </div>
            <div className="col-md-6 mb-3">
              <Dropdown name={"Province"} />
            </div>
            <div className="col-md-6 mb-3">
              <DropdownChip badge={true} />
            </div>
        </div>
    </div>
  );
};

export default RegionFilter;
