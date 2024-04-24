import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const query = params.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  if (
    !process.env.BING_API_ENDPOINT ||
    !process.env.BING_API_KEY ||
    !process.env.BING_CUSTOM_CONFIG_ID
  ) {
    return NextResponse.json(
      { error: "Bing API is not configured" },
      { status: 500 }
    );
  }

  const apiKey = process.env.BING_API_KEY;
  const searchParams = new URLSearchParams();
  searchParams.set("q", query);
  searchParams.set("customConfig", process.env.BING_CUSTOM_CONFIG_ID);
  const endpoint = `${
    process.env.BING_API_ENDPOINT
  }/v7.0/custom/search?${searchParams.toString()}`;

  const headers = new Headers();
  headers.set("Ocp-Apim-Subscription-Key", apiKey);

  const response = await fetch(endpoint, {
    headers: headers,
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: await response.text() },
      { status: response.status }
    );
  }

  return NextResponse.json({ data: await response.json() });
}
