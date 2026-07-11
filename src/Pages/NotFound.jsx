import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-lightgray dark:bg-primary px-5">
      <h1 className="text-6xl font-bold text-primary dark:text-lightgray mb-4">
        404
      </h1>
      <p className="text-xl sm:text-2xl text-charcoal dark:text-lightgray mb-6 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-accent text-blue-600 text-2xl font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}