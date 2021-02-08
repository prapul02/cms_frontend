import React, { useState } from "react";
import TextField from "../components/TextField";

function AddPost() {

  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [content, setContent] = useState("");

  

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://safe-hollows-51478.herokuapp.com/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: content,
        title: title,
        authorId: authors
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Submitted Successfully");
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onFormSubmit}>
        <TextField
          label="Post Title"
          name="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter title"
          required
        />
        <br />
        <br />
        
        <TextField
          label="Author"
          name="author"
          type="text"
          value={authors}
          onChange={(event) => setAuthors(event.target.value)}
          placeholder="Enter author name"
          required
        />
          
        
        <br />
        <br />
        <TextField
          label="Content"
          name="content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Enter content"
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;
