import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ color: `tomato` }}>
    <p>Hello world from my third Gatsby page</p>
    <li>A simple list</li>
    <li>With some flair</li>
    <Link to="/">back home</Link>
  </div>
);