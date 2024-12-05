import React from "react";
import News from "./News";
import Posts from "./Posts";
import Contact from "./Contact";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 0.2, border: "1px solid black" }}>
        <News />
      </div>
      <div style={{ flex: 0.6, border: "1px solid black" }}>
        <Posts />
      </div>
      <div style={{ flex: 0.2, border: "1px solid black" }}>
        <Contact />
      </div>
    </div>
  );
};

export default Dashboard;
