import { WeatherCurrent, WeatherForecast } from "@/types/types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export const getCityCurrentWeather = async (
  city: string
): Promise<WeatherCurrent> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/weather?source=current.json&city=${city}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

export const getCityForecastWeather = async (
  city: string
): Promise<WeatherForecast> => {
  try {
    const response = await fetch(
      `${baseUrl}/api/weather?source=forecast.json&city=${city}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};
