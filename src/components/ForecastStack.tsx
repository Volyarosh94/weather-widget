import { Stack } from "@mui/material";
import ForecastDay from "./ForecastDay";
import { WeatherForecastDay } from "@/types/types";

interface WeatherForecast {
  forecast: WeatherForecastDay[];
  days: number;
  fullHeight?: boolean;
}

const ForecastStack: React.FC<WeatherForecast> = ({
  forecast,
  days,
  fullHeight = false,
}) => {
  return (
    <Stack
      sx={{
        height: fullHeight ? "100%" : "auto",
        width: "100%",
      }}
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={0.5}
      overflow={"auto"}
    >
      {forecast.slice(1, days + 1).map((day) => (
        <ForecastDay
          key={day.date}
          date={day.date}
          icon={`http:${day.day.condition.icon}`}
          maxTemp={day.day.maxtemp_c}
          minTemp={day.day.mintemp_c}
          weatherName={`${day.day.condition.text}`}
        />
      ))}
    </Stack>
  );
};

export default ForecastStack;
