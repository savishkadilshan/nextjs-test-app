import { sql } from "@/db";

export async function GET(request: Request) {
  const [row] = await sql`
            select coalesce(sum(value), 0) as value
            from revenue
        `;

  return Response.json(Number(row?.value ?? 0));
}
