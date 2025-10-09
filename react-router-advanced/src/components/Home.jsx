import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/blog">Blog</Link>
    </nav>
  </div>
);

export default Home;
