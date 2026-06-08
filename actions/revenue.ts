"use server";

import { sql } from "@/db";

export async function getRevenue() {
  const [row] = await sql`
		select coalesce(sum(value), 0) as value
		from revenue
	`;

  return Number(row?.value ?? 0);
}
