import React from "react";
import { useParams } from "react-router-dom";
import useFetchPosts from "../Hooks/useFetchPosts";
import Heatmap from "./Heatmap";
import LoadSpinner from "./LoadSpinner";

const LoadHeatmap = () => {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subreddit);
  if (isLoading) {
    return <LoadSpinner />;
  }
  return (
    <div>
      <Heatmap postsPerDay={postsPerDay} />
    </div>
  );
};

export default LoadHeatmap;
