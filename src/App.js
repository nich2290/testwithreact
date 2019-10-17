import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Feed from "./Feed.js";
import Footer from "./Footer.js";
import "./App.css";

export default function App() {
  const name = "Jonas"; // pass this to <Profile /> and <Footer />

  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const baseURL = "https://inappropriatedb-4dbf.restdb.io/rest/posts";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d888182fd86cb75861e262c",
      "cache-control": "no-cache"
    };
    fetch(baseURL + "posts?fetchchildren=true", {
      method: "get",
      headers: headers
    })
      .then(e => e.json())
      .then(e => setPosts(e));
  }, []);

  /*function addPost() {
    const copy = posts.concat({
      message: "very strange",
      author: "everybody"
    });
    setPosts(copy);
  }*/
  function addNewPost(data) {
    console.log(data);
    data.comments = [];
    const copy = posts.concat(data);
    setPosts(copy);
  }
  return (
    <div className="App">
      <Header name={name} />
      <Feed onPostAdded={addNewPost} posts={posts} />
      <Footer name={name} />
    </div>
  );
}
