import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const useSearchForm = () => {
  const { subreddit: initialSubreddit } = useParams();
  const [inputSubreddit, setInputSubreddit] = useState(initialSubreddit);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputSubreddit(e.target.value);
  };

  //change url after form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSubreddit}`);
  };

  // update input value when URL is updated externally
  // e.g when header's Search route is cliked initially
  useEffect(() => {
    setInputSubreddit(initialSubreddit);
  }, [initialSubreddit]);
  return { inputSubreddit, handleChange, handleSubmit };
};

export default useSearchForm;
