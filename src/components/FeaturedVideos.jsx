import React from "react";

import SmallPostPreview from "./SmallPostPreview";

function FeaturedVideos({ videos }) {
  const videoList = videos
    ? videos.map((element, index) => {
        const postObj = {
          url: element.http_url,
          title: element.title,
          category: "react",
          image: element.thumb_nail,
        };
        return <SmallPostPreview key={`feat-video-${index}`} post={postObj} />;
      })
    : null;
  return <>{videoList}</>;
}

export default FeaturedVideos;
