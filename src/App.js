import React, {Component} from "react";
// import {Container,Row, Col} from "react-bootstrap";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <aside className="sidebar d-none d-lg-block">
                    <Sidebar/>
                </aside>
                <main className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-3 d-none d-lg-block">
                                <LeftPanel/>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <RightPanel/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
