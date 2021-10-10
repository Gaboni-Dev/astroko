import React from "react";

import SmallPostPreview from "./SmallPostPreview";

function FeaturedVideos({ videos }) {
  const videoList = videos.map((element) => {
    const postObj = {
      url: element.http_url,
      title: element.title,
      category: "react",
      image: element.thumb_nail,
    };
    return <SmallPostPreview post={postObj} />;
  });
  return <>{videoList}</>;
}

export default FeaturedVideos;
