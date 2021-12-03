import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

import TagList from "./TagList.jsx";

import { categoryIcons, monthOfYear } from "../common.js";
import "/SmallPostPreview.css";

function SmallPostPreview(props) {
  const { post } = props;
  const tags = post?.tags ? post.tags : [];
  const category = post?.category ? post.category : [];

  return (
    <article>
      <a href={post.url}>
        <div className="post-preview">
          <div className="post-category-icon-wrapper">
            <FontAwesomeIcon
              icon={categoryIcons[post.category]}
              className="post-category-icon"
            />
          </div>
          <div className="post-content">
            <header>
              <h1 className="title">{post.title}</h1>
            </header>
          </div>
          <div className="post-image">
            {post?.image && <img src={post.image} />}
          </div>
        </div>
      </a>
    </article>
  );
}

export default SmallPostPreview;
