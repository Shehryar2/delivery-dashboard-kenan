import React, { Component } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";
class App extends Component {
  render() {
    return (
      <div className=" d-flex">
        <div className=" sidebar bg-white">
          <Sidebar />
        </div>
        <div className="main p-4">
          <div className="row m-0 mt-5">
            <div className="col-lg-6 my-2 col-md-6 col-xs-12">
              <LeftPanel />
            </div>
            <div className="col-lg-6 my-2 col-md-6 col-xs-12">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
