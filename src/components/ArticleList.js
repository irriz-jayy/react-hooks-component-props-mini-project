import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
  //   console.log(blogData.posts);
  const articleArray = blogData.posts.map((arr) => {
    return (
      <Article
        title={arr.title}
        date={arr.date}
        preview={arr.preview}
        key={arr.id}
      />
    );
  });

  return <main>{articleArray}</main>;
}

export default ArticleList;
