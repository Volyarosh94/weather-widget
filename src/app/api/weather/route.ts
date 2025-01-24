import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(
    request.url,
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  );

  const city = searchParams.get("city");
  const source = searchParams.get("source");

  const apiUrl = `${process.env.WEATHER_API_URL}/${source}?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no&alerts=no&days=10`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Weather API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to fetch weather data", details: errorMessage },
      { status: 500 }
    );
  }
}
