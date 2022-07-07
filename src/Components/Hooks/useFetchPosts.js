import { useEffect, useState } from "react";

export const fetchPosts = async (subreddit, allPosts = [], after = null) => {
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100${
    after ? `&after=${after}` : ""
  }`;

  //fetch 500 posts
  if (allPosts.length >= 500) {
    return allPosts;
  }
  const response = await fetch(url);
  const { data } = await response.json();
  const currData = data.children;
  // const parsed = currData.map((data) => data.data);
  const nextPage = data.after;
  allPosts.push(...currData);

  return fetchPosts(subreddit, allPosts, nextPage);
};

export const groupPostsPerDayAndHour = async (posts) => {
  const postsPerDay = Array(7)
    .fill()
    .map(() => Array(24).fill([]));

  posts.forEach((post) => {
    const createdAt = new Date(post.data.created_utc * 1000);
    const dayOfWeek = createdAt.getDay();
    const hour = createdAt.getHours();
    postsPerDay[dayOfWeek][hour].push({
      createdAt: createdAt,
      title: post.data.title,
      url: `https://reddit.com${post.data.permalink}`,
      score: post.data.score,
      numComments: post.data.num_comments,
      author: post.data.author,
    });
    return { postsPerDay };
  });
};

function useFetchPosts(subreddit) {
  const [allPosts, setAllPosts] = useState([]);
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    let mounted = true;
    setStatus("pending");
    fetchPosts(subreddit)
      .then((posts) => groupPostsPerDayAndHour(posts))
      .then((postsData) => {
        if (mounted) {
          setPostsPerDay(postsData.postsPerDay);
          setAllPosts(postsData.totalPosts);
          setStatus("resolved");
        }
      })
      .catch(() => {
        setStatus("rejected");
      });
    return () => {
      mounted = false;
    };
  }, [subreddit]);

  return {
    isLoading: status === "pending",
    hasError: status === "rejected",
    postsPerDay,
    allPosts,
  };
}

export default useFetchPosts;
