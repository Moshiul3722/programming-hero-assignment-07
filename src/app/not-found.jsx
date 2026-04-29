import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-3">
      <span className="text-7xl font-bold text-[#1F2937]">404</span>
      <h2 className="text-5xl font-bold">Page not found</h2>
      <Link href="/">
        <button className="btn btn-outline btn-accent">
          Back to Home page
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
