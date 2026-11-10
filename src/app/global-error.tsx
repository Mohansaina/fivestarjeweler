"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex min-h-screen items-center justify-center p-6 text-center font-sans">
        <div className="space-y-4 max-w-md">
          <h2 className="text-2xl font-serif">Something went wrong</h2>
          <p className="text-xs text-zinc-400 font-light">
            An unexpected error occurred. Please refresh or return to the homepage.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-wider font-medium"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

