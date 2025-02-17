// ArticleList.js
import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const articles = props.posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date || "January 1, 1970"}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{articles}</main>;
}

export default ArticleList;
