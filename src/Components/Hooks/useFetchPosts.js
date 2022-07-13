import axios from "axios";
import { useEffect, useState } from "react";

export const fetchPosts = async (subreddit, allPosts = [], after = null) => {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  //fetch 500 posts
  if (allPosts.length > 400) {
    return allPosts;
  }

  if (after) {
    url = `${url}&after=${after}`;
  }
  const result = await axios(url);
  const currData = result.data.data.children;
  const parsed = currData.map((data) => data.data);
  const nextPage = result.data.data.after;
  allPosts.push(...parsed);
  return fetchPosts(subreddit, allPosts, nextPage);
};

function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPosts(subreddit)
      .then((newPosts) => {
        setPosts(newPosts);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [subreddit]);

  return {
    loading,
    error,
    posts,
  };
}
export default useFetchPosts;
