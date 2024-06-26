import "server-only";

export async function getSearch(q: string) {
  "use server";

  const apiKey = process.env.BING_API_KEY;
  const searchParams = new URLSearchParams();
  searchParams.set("q", q);
  const endpoint = `${
    process.env.BING_API_ENDPOINT
  }/v7.0/search?${searchParams.toString()}`;

  const headers = new Headers();
  headers.set("Ocp-Apim-Subscription-Key", apiKey);

  const response = await fetch(endpoint, {
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return {
    data: await response.json(),
  };
}
