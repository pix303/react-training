import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>
        <strong>404</strong>: this page not exist
      </p>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default PageNotFound;
