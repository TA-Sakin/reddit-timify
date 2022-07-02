import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const useSearchForm = () => {
  const { subreddit: initialSubreddit } = useParams();
  const [inputSubreddit, setInputSubreddit] = useState(initialSubreddit);
  // const lastPostId = null;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputSubreddit(e.target.value);
  };

  //change url after form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSubreddit}`);
    // const url = `https://www.reddit.com/r/${inputSubreddit}/top.json?t=year&limit=100${
    //   lastPostId ? `&after=${lastPostId}` : ""
    // }`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  // update input value when URL is updated externally
  // e.g when header's Search route is cliked initially
  useEffect(() => {
    setInputSubreddit(initialSubreddit);
  }, [initialSubreddit]);
  return { inputSubreddit, handleChange, handleSubmit };
};

export default useSearchForm;
