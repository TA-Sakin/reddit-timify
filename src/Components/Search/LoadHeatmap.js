import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchPosts from "../Hooks/useFetchPosts";
import { groupPostsPerDayAndHour } from "../Shared/groupPostsPerDayAndHour";
import Heatmap from "./Heatmap";
import LoadSpinner from "./LoadSpinner";

const LoadHeatmap = () => {
  const { subreddit } = useParams();
  const { loading, error, posts } = useFetchPosts(subreddit);
  const [postsPerDay, setPostsPerDay] = useState(null);

  useEffect(() => {
    setPostsPerDay(groupPostsPerDayAndHour(posts));
  }, [posts]);
  let errorMsg = <p>Please try again</p>;
  if (loading) {
    return <LoadSpinner />;
  }
  if (error) {
    return errorMsg;
  }
  return (
    <>
      <div className="text-center">{errorMsg}</div>
      {!loading && <Heatmap posts={postsPerDay} />}
    </>
  );
};

export default LoadHeatmap;
