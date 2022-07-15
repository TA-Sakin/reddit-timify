import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Search from "./Components/Search/Search";
import Footer from "./Components/Shared/Footer";
import { DEFAULT_SUBREDDIT } from "./Components/Shared/Constant";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/search/:subreddit" element={<Search></Search>}></Route>
        <Route
          path="/search"
          element={<Navigate replace to={`/search/${DEFAULT_SUBREDDIT}`} />}
        />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
