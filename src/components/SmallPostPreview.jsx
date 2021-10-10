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
        <div class="post-preview">
          <div class="post-category-icon-wrapper">
            <FontAwesomeIcon
              icon={categoryIcons[post.category]}
              class="post-category-icon"
            />
          </div>
          <div class="post-content">
            <header>
              <h1 class="title">{post.title}</h1>
            </header>
          </div>
          <div class="post-image">
            {post?.image && <img src={post.image} />}
          </div>
        </div>
      </a>
    </article>
  );
}

export default SmallPostPreview;
