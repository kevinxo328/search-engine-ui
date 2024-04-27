import "server-only";

export async function getCustomSearch(q: string) {
  "use server";
  const endpoint = `/api/bing/search/custom?q=${q}`;
  const res = await fetch(process.env.__NEXT_PRIVATE_ORIGIN + endpoint);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
