"use client";
import { WeatherCurrent, WeatherForecast } from "@/types/types";
import { createContext, useContext, useState } from "react";

interface WeatherProviderProps {
  children: React.ReactNode;
}

interface WeatherContext {
  currentWeather: WeatherCurrent | undefined;
  forecastWeather: WeatherForecast | undefined;
  setCurrentWeather: (weather: WeatherCurrent | undefined) => void;
  setForecastWeather: (weather: WeatherForecast | undefined) => void;
}

const WeatherContext = createContext<WeatherContext | undefined>(undefined);

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [currentWeather, setCurrentWeather] = useState<
    WeatherCurrent | undefined
  >(undefined);
  const [forecastWeather, setForecastWeather] = useState<
    WeatherForecast | undefined
  >(undefined);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecastWeather,
        setCurrentWeather,
        setForecastWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

export { WeatherProvider, useWeather };
