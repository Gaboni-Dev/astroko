import React, { useState } from "react";
import BlogPostPreview from "./BlogPostPreview.jsx";

import "/PostList.css";

function PostList(props) {
  const [posts, setPosts] = useState(props.posts);
  const [tagFilter, setTagFilter] = useState("");
  console.log("tagFilter", tagFilter);
  console.log("posts", posts.length);

  const getTagList = (posts) => {
    const tags = [];

    posts.forEach((post) => {
      if (!post.tags) return;

      post.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    return tags;
  };

  return (
    <>
      <section className="tags-wrapper">
        {getTagList(posts).map((tag) => {
          const className =
            tagFilter === tag ? "tag-button tag-button--active" : "tag-button";
          return (
            <button
              value={tag}
              className={className}
              onClick={(e) => {
                if (e.target.value === tagFilter) {
                  setTagFilter("");
                } else {
                  setTagFilter(e.target.value);
                }
              }}
            >
              #{tag}
            </button>
          );
        })}
      </section>
      <section>
        {posts
          .filter((post) => {
            if (tagFilter === "") return true;

            if (!post.tags) return false;

            return post.tags.includes(tagFilter);
          })
          .map((post) => (
            <BlogPostPreview post={post} />
          ))}
      </section>
    </>
  );
}

export default PostList;
