import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchPosts from "../Hooks/useFetchPosts";
import { groupPostsPerDayAndHour } from "../Shared/groupPostsPerDayAndHour";
import Heatmap from "./Heatmap";
import LoadSpinner from "./LoadSpinner";

const LoadHeatmap = () => {
  const { subreddit } = useParams();
  const { status, posts } = useFetchPosts(subreddit);
  const [postsPerDay, setPostsPerDay] = useState(null);

  useEffect(() => {
    setPostsPerDay(groupPostsPerDayAndHour(posts));
  }, [posts]);

  return (
    <>
      {
        {
          loading: <LoadSpinner />,
          error: (
            <div className="text-center text-gray-500 mt-8 text-[17px]">
              Subreddit not found. Please try another.
            </div>
          ),
          loaded: <Heatmap posts={postsPerDay} />,
        }[status]
      }
    </>
  );
};

export default LoadHeatmap;
