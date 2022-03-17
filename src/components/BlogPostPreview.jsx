import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

import TagList from "./TagList.jsx";

import { categoryIcons } from "../common.js";

import "/BlogPostPreview.css";

function BlogPostPreview(props) {
  const { post } = props;
  const tags = post?.tags ? post.tags : [];
  const category = post?.category ? post.category : [];

  return (
    <article className="post-preview">
      <div className="post-category-icon-wrapper">
        <FontAwesomeIcon
          icon={categoryIcons[post.category]}
          className="post-category-icon"
        />
      </div>
      <div className="post-content">
        <header>
          <a href={post.url}>
            <h1 className="title">{post.title}</h1>
          </a>
          {(category || tags) && <TagList category={category} tags={tags} />}
        </header>
        <main>
          <p>{post.description}</p>
          <a href={post.url} className="read-more">
            Read >
            {/* <FontAwesomeIcon icon={faShoePrints} className="footprints" /> */}
          </a>
        </main>
      </div>
    </article>
  );
}

export default BlogPostPreview;
