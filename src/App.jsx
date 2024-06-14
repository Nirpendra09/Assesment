import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import "./App.css";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}
