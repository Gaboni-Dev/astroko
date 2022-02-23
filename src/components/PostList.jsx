import React, { useState } from "react";
import BlogPostPreview from "./BlogPostPreview.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "/PostList.css";

function PostList(props) {
  const [posts, setPosts] = useState(props.posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  

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
              key={tag}
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
          .filter((post) => {
            if (searchTerm === "") return true;

            const { title, description } = post;

            if (
              title.toLowerCase().includes(searchTerm) ||
              description.toLowerCase().includes(searchTerm)
            ) {
              return true;
            }

            return false;
          })
          .map((post) => (
            <BlogPostPreview key={post.title} post={post} />
          ))}
      </section>
    </>
  );
}

export default PostList;
