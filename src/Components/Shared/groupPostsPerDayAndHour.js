export const groupPostsPerDayAndHour = (posts) => {
  const postsPerDay = [];

  posts.forEach((post) => {
    const date = new Date(post.created_utc * 1000);
    const day = date.getDay();
    const hour = date.getHours();

    if (!postsPerDay[day]) {
      postsPerDay[day] = Array.from({ length: 24 }, () => []);
    }

    postsPerDay[day][hour].push(post);
  });

  return postsPerDay;
};
