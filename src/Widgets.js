import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newArticle = (heading,subtitle) =>(
        <div className="widgets_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon/> 
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("Sasi Vardhan is Back","Recent News - 1003 readers")}
      {newArticle("React js Topics","old News - 1073 readers")}
      {newArticle(" Master in Js Soon","old News - 14303 readers")}
      {newArticle("CSS Styling ","old News - 132003 readers")}
      {newArticle("React Redux Doc","Top News - 120003 readers")}
    </div>
  );
};

export default Widgets;
