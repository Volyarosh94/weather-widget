import { getCityCurrentWeather, getCityForecastWeather } from "@/api/weather";
import Loader from "@/components/Loader";
import PageContent from "@/components/PageContent";
import { WeatherCurrent, WeatherForecast } from "@/types/types";
import { Suspense } from "react";

export default async function Home() {
  const currentWeather: WeatherCurrent = await getCityCurrentWeather("London");
  const forecastWeather: WeatherForecast = await getCityForecastWeather(
    "London"
  );

  return (
    <Suspense fallback={<Loader />}>
      <PageContent
        currentWeather={currentWeather}
        forecastWeather={forecastWeather}
      />
    </Suspense>
  );
}
