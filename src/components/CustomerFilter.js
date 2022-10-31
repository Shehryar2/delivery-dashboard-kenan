import React from "react";
import Dropdown from "./Dropdown";

const CustomerFilter = () => {
    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31];
  return (
    <div>
        <div className="row">
          <h3 className="mb-3">Customer</h3>
          <div className="col-md-6 mb-3">
            <Dropdown name={"Total"} />
          </div>
          <div className="col-md-6 mb-3">
            <div className="input-group custom mb-3">
                <div className="input-group-text dropdown calenderDropdown">
                    <a className="dropdown-toggle" href="#"
                       role="button"
                       id="calenderDropdown"
                       data-bs-toggle="dropdown"
                       aria-expanded="false">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.4334 1.80272V0.649991C13.4334 0.417703 13.3095 0.203125 13.1084 0.0870536C12.9074 -0.0290179 12.6595 -0.0290179 12.4584 0.0870536C12.2574 0.203125 12.1334 0.41771 12.1334 0.649991V1.73337H4.76653V0.649991C4.76653 0.417703 4.64263 0.203125 4.44153 0.0870536C4.24044 -0.0290179 3.99263 -0.0290179 3.79153 0.0870536C3.59044 0.203125 3.46653 0.41771 3.46653 0.649991V1.80272C2.61325 1.93983 1.82456 2.34159 1.212 2.95125C0.599291 3.56077 0.193468 4.34745 0.0518799 5.19999H16.8479C16.7063 4.34745 16.3005 3.56077 15.6878 2.95125C15.0752 2.34159 14.2865 1.93985 13.4332 1.80272H13.4334Z"
                                fill="#FFC107"
                            />
                            <path
                                d="M0 6.49981V12.7833C0 13.8751 0.43368 14.9222 1.20569 15.6942C1.97771 16.4662 3.02484 16.8999 4.11662 16.8999H12.7835C13.8753 16.8999 14.9224 16.4662 15.6945 15.6942C16.4665 14.9222 16.9001 13.875 16.9001 12.7833V6.49981H0Z"
                                fill="#FFC107"
                            />
                        </svg>

                    </a>
                    <div className="dropdown-menu" aria-labelledby="calenderDropdown">
                        <div className="row">
                            <div className="col-6">
                                <select className="form-control" name="months">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select className="form-control" name="years">
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                </select>
                            </div>
                        </div>
                        <div className="calenderHeader">
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="calenderDates">
                            { dates.map((date) =>
                                <div className="date" key={date}>{date}</div>
                                )
                            }
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>From</label>
                                <input type="text" className="form-control" placeholder="March 12, 2021" aria-label="From Date"/>
                            </div>
                            <div className="col-6">
                                <label>To</label>
                                <input type="text" className="form-control" placeholder="April 12, 2021" aria-label="To date"/>
                            </div>
                            <div className="col-12 text-end">
                                <button className="btn btn-primary btn-sm">Set</button>
                            </div>
                        </div>
                    </div>
                </div>
              <input type="text" className="form-control" placeholder="Min Speed" aria-label="Min Speed"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CustomerFilter;
