import React from "react";
import { useParams } from "react-router-dom";
import useFetchPosts from "../Hooks/useFetchPosts";
import LoadSpinner from "./LoadSpinner";

const LoadHeatmap = () => {
  const { subreddit } = useParams();
  const { isLoading, hasError, postsPerDay } = useFetchPosts(subreddit);
  if (isLoading) {
    return <LoadSpinner />;
  }
  return <div></div>;
};

export default LoadHeatmap;
