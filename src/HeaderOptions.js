import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOptions({ title, Icon, avatar,onClick }) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon">{user?.email}</Avatar>}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
