import { getFullPath } from "@/utils/utils";
import "server-only";

export async function getCustomSearch(q: string) {
  "use server";
  const endpoint = `/api/bing/search/custom?q=${q}`;
  const host = process.env.VERCEL_URL || "http://localhost:3000";

  const res = await fetch(getFullPath(host, endpoint));

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
