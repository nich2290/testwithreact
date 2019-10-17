import React, { useState } from "react";
import AddCommentForm from "./AddCommentForm.js";
import Comment from "./Comment.js";
export default function Post(props) {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="postcontainer">
        <p>{props.author}</p>
        <p>{props.message}</p>
        <button onClick={updateCount}>{count} likes</button>
        <AddCommentForm />
        <ol>
          {props.comments.map(comment => {
            return <Comment author={comment.author} comment={comment.comment} />;
          })}
        </ol>

        <Comment />
        <Comment />
      </div>
    </>
  );
}
