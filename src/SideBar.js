import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const SideBar = () => {

const user = useSelector(selectUser);


  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://plus.unsplash.com/premium_photo-1676320125952-85ced2f39d7f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar  src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
        <h2 style={{fontSize:"20px"}}>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,432</p>
        </div>
        <div className="sidebar_stat">
          <p> view on post</p>
          <p className="sidebar_statNumber">2,232</p>
        </div>
      </div>

      <div className="sidebar_button">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("Programming")}
        {recentItems("Javascript")}
        {recentItems("react native")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default SideBar;
