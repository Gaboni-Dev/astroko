import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagList from "./TagList.jsx";

import { categoryIcons } from "../common.js";
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
              <a href={projects.website} target="_blank">
                {projects.title}
              </a>
            </div>
          </header>{" "}
          <p>{projects.description}</p>
          <p className="role">{projects.role}</p>
        </div>
        <div className="post-image">
          {projects?.image && <img src={projects.image} />}
        </div>
      </div>
    </article>
  );
}

export default ProjectPreview;
