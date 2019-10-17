import React, { useState } from "react";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";

export default function AddPostForm(props) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  /*function onAuthorChange(e){
  
    }*/
  const onAuthorChange = e => {
    setAuthor(e.target.value);
  };
  const onMessageChange = e => {
    setMessage(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();

    const baseURL = "https://frontendautmn2019-5ad1.restdb.io/rest/";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887443fd86cb75861e25ee",
      "cache-control": "no-cache"
    };
    fetch(baseURL + "posts", {
      method: "post",
      headers: headers,
      body: JSON.stringify({
        author: author,
        message: message,
        likes: 0
      })
    })
      .then(e => e.json())
      .then(data => {
        props.onPostAdded(data);
        //console.log(e);
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>AddPostForm</h2>

      <Input label="Input 1" type="text" name="author" value={author} onChange={onAuthorChange} floatingLabel={true} />

      <textarea value={message} onChange={onMessageChange}></textarea>
      <input type="submit" value="Say what you think" />
      <Button className="newcolor">button</Button>
    </form>
  );
}
