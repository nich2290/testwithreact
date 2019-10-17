import React from "react";

export default function Comment(props) {
  return (
    <>
      <li>
        "{props.author}" said: {props.comment}
      </li>
    </>
  );
}
