import { getRevenue } from "@/actions/revenue";

export default async function Home() {
  const revenue = await getRevenue();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Revenue
        </p>
        <div className="mt-4 text-5xl font-semibold tracking-tight">
          {revenue.toLocaleString()}
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Loaded directly from the Neon database on the server.
        </p>
      </main>
    </div>
  );
}
