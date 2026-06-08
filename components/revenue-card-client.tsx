"use client";

import { useEffect, useState } from "react";

export function RevenueCard() {
  const [revenue, setRevenue] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/revenue")
      .then((res) => res.json())
      .then((data) => setRevenue(data))
      .catch(() => setRevenue(0));
  }, []);

  return (
    <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        Revenue
      </p>
      <div className="mt-4 text-5xl font-semibold tracking-tight">
        {revenue !== null ? revenue.toLocaleString() : "Loading..."}
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Loaded directly from the Neon database on the server.
      </p>
    </div>
  );
}
