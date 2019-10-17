import React from "react";
import Profile from "./Profile.js";
export default function Header(props) {
  return (
    <>
      <header className="App-header">
        <h1>Social media</h1>
        <Profile username={props.username} />
      </header>
    </>
  );
}
