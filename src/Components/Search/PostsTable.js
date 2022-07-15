import dayjs from "dayjs";
import React from "react";
import "./tilesAndTable.css";

const PostsTable = ({ posts }) => {
  const getMin = (utc) => dayjs.unix(utc).minute();
  const sortedPosts = [...posts].sort(
    (a, b) => getMin(a.created_utc) - getMin(b.created_utc)
  );
  const tableUI = sortedPosts?.map((post) => (
    <tr>
      <td>
        <a
          className="text-[#0087ff]"
          href={`https://reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          title={post.title}
        >
          {post.title}
        </a>
      </td>
      <td>{dayjs.unix(post.created_utc).format("h:mm a")}</td>
      <td>{post.score}</td>
      <td>{post.num_comments}</td>
      {post.author === "deleted" ? (
        <td>{post.author}</td>
      ) : (
        <td>
          <a
            className="text-[#0087ff]"
            href={`https://reddit.com/u/${post.author}`}
            target="_blank"
            title={post.author}
            rel="noopener noreferrer"
          >
            {post.author}
          </a>
        </td>
      )}
    </tr>
  ));
  return (
    <section className="max-w-[786px] my-0 mx-auto">
      <header className="text-[24px] text-start mt-10 mb-2">Posts</header>
      {posts && posts.length > 0 && (
        <table className="border-1 border-solid border-[#dddddd] text-start text-[14px] border-collapse">
          <thead>
            <tr>
              <td>Title</td>
              <td>Time Posted</td>
              <td>Score</td>
              <td>Comments</td>
              <td>Author</td>
            </tr>
          </thead>
          <tbody>{tableUI}</tbody>
        </table>
      )}
    </section>
  );
};

export default PostsTable;
