import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./Components/Home/Search";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/search" element={<Search></Search>}></Route>
      </Routes>
    </>
  );
}

export default App;

