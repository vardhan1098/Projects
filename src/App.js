import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase_config";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // user logged in
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl:userAuth.photoURL,
          })
        );
      }else{
        // user logged out
        dispatch(logout)
      }
    })
  },[])

  return (
    <div className="app">
      {/*Header*/}
      <Header />
      {/*App Body*/}

      {!user ? (
        <Login/>
      ) : (
        <div className="app_body">
          {/*SideBar*/}
          <SideBar />
          {/*Feed*/}
          <Feed />
          {/* Widgets*/}
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
