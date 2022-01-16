import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Home.css";
import app from "./base";

function Home() {
  return (
    // BEM
    <div className="home">
      <Sidebar />
      <Feed />
      {/* <Widgets /> */}
    </div>
  );
}

export default Home;
