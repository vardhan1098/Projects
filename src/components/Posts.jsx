
import React, { useState } from "react";
import Posts_Content from "./Posts_Content";
import { FaRegImage } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
function Posts() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <h2>Posts has been Posted.</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          name="post"
          style={{
            height: "100px",
            width: "90%",
            borderRadius: "20px",
            padding: "10px",
          }}
          value={posts}
          placeholder="Post an Article.."
          onChange={(e) => setPosts(e.target.value)}
          id=""
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button style={{ padding: "5px 10px", cursor: "pointer" }}>
          <FaRegImage color="orange" style={{ marginRight: "5px" }} />
          Media
        </button>
        <button style={{ padding: "5px 10px" }}>
          {" "}
          <FaRegPenToSquare color="red" style={{ marginLeft: "5px" }} /> Write
          An Article
        </button>
      </div>
      <hr />
      <div style={{ marginTop: "50px" }}>
        <Posts_Content />
      </div>
    </div>
  );
}

export default Posts;
