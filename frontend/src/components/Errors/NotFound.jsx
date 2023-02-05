import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-medium">
        Sorry, this page isn't available.
      </h1>
      <p className="text-md">
        The link you followed may be broken, or the page may have been removed.
        <Link to="/" className="text-blue-900">
          {" "}
          Go back to DevMedia.
        </Link>
      </p>
      <Link
        to="/"
        className="px-4 py-2 font-medium text-white rounded bg-primary-blue hover:drop-shadow-lg"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
