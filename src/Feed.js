// src/Feed.js
import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Posts from "./Posts";
import { db } from "./firebase_config";  // Updated import path
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [post, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )));
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl ||"",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');  
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" value={input} placeholder="Create a Post" onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendPost} type="submit">send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5f9" />
          <InputOptions Icon={PlayCircleIcon} title="Video" color="red" />
          <InputOptions Icon={EventIcon} title="Event" color="lightgray" />
          <InputOptions Icon={ArticleIcon} title="Write Article" color="green" />
        </div>
      </div>
      <FlipMove>
      {post.map(({ id, data }) => (
        <Posts key={id} {...data} />
      ))}
      </FlipMove>
     

    </div>
  );
};

export default Feed;
