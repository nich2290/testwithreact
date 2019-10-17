import React from "react";

export default function Profile(props) {
  return (
    <>
      <div className="profilepic">
        <img className="profilepic" src="../portrait.jpg" />
      </div>
      <h2>{props.username}</h2>
    </>
  );
}
