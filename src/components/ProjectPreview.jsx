import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagList from "./TagList.jsx";

import { categoryIcons, monthOfYear } from "../common.js";
import "/Project.css";

function ProjectPreview(props) {
  const { projects } = props;
  const tags = projects?.tags ? projects.tags : [];
  const category = projects?.category ? projects.category : [];

  return (
    <article>
      <div className="post-preview">
        <div className="post-category-icon-wrapper">
          <FontAwesomeIcon
            icon={categoryIcons[projects.category]}
            className="post-category-icon"
          />
        </div>
        <div className="post-content">
          <header>
            <div className="title">
              {" "}
              <a href={projects.website}>{projects.title}</a>
            </div>
          </header>{" "}
          <em>{projects.description}</em>
        </div>
        <div className="post-image">
          {projects?.image && <img src={projects.image} />}
        </div>
      </div>
    </article>
  );
}

export default ProjectPreview;