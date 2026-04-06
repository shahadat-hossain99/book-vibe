import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    // ১. মেইন র‍্যাপার: ফ্লেক্সবক্স দিয়ে স্ক্রিনের মাঝখানে আনা হয়েছে
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      {/* ২. মর্ডান কার্ড ডিজাইন (DaisyUI Card) */}
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl border border-base-300">
        <div className="card-body items-center text-center py-16">
          {/* ৩. এনিমেটেড আইকন সেকশন */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary opacity-10 animate-ping"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-primary relative"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* ৪. টাইপোগ্রাফি (Tailwind Utility Classes) */}
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
            Error 404
          </p>
          <h1 className="text-4xl font-extrabold text-base-content mb-4">
            Lost in Cyberspace?
          </h1>
          <p className="text-base-content/70 text-lg mb-8 max-w-sm">
            The page you are looking for doesn't exist or has been moved to
            another coordinate.
          </p>

          {/* ৫. বাটন গ্রুপ (DaisyUI Buttons) */}
          <div className="card-actions justify-center gap-4">
            {/* বাটনটিকে Link ট্যাগ দিয়ে পরিবর্তন করুন */}
            <Link
              to="/"
              className="btn btn-primary btn-wide shadow-lg shadow-primary/30"
            >
              Take Me Home
            </Link>
            <button className="btn btn-outline btn-ghost">
              Contact Support
            </button>
          </div>

          {/* ৬. প্রফেশনাল ফুটনোট */}
          <div className="mt-12 pt-8 border-t border-base-300 w-full text-xs text-base-content/40 flex justify-between">
            <span>
              Ref: <code className="text-primary">X-9902-Z</code>
            </span>
            <span>
              Status:{" "}
              <span className="badge badge-error badge-outline badge-xs">
                Offline
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
