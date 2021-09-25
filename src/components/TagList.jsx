import React from "react";

import "/TagList.css";

function TagList(props) {
  const { category, tags } = props;
  return (
    <div>
      <ul className="tag-list">
        {category && (
          <li key="category" className="tag">
            {category}
          </li>
        )}
        {tags &&
          tags.map((tag, idx) => {
            return (
              <li key={`tag-${idx}`} className="tag">
                {tag}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TagList;
