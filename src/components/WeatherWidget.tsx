"use client";

import { useWeather } from "@/context/WeatherProvider";
import { Box, Divider, Paper, Stack } from "@mui/material";
import SmallInfo from "./SmallInfo";
import ForecastStack from "./ForecastStack";
import LargeInfo from "./LargeInfo";

interface WeatherWidgetProps {
  size: "small" | "wide" | "large";
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ size }) => {
  const { currentWeather, forecastWeather } = useWeather();

  switch (size) {
    case "small":
      return (
        <Paper sx={{ height: "100%" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            p={2}
            borderRadius={1}
          >
            <SmallInfo
              condition={currentWeather?.current?.condition?.text || "N/A"}
              country={currentWeather?.location?.country || "N/A"}
              name={currentWeather?.location?.name || "N/A"}
              temperature={currentWeather?.current?.temp_c ?? 0}
              icon={currentWeather?.current?.condition?.icon || ""}
              feelslike={currentWeather?.current?.feelslike_c ?? 0}
              humidity={currentWeather?.current?.humidity ?? 0}
            />
          </Box>
        </Paper>
      );
    case "wide":
      return (
        <Paper sx={{ height: "100%" }}>
          <Stack
            sx={{
              height: "100%",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
            p={2}
            borderRadius={1}
            gap={1}
          >
            <Box
              sx={{
                height: "100%",
                minWidth: "fit-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <SmallInfo
                condition={currentWeather?.current?.condition?.text || "N/A"}
                country={currentWeather?.location?.country || "N/A"}
                name={currentWeather?.location?.name || "N/A"}
                temperature={currentWeather?.current?.temp_c ?? 0}
                icon={currentWeather?.current?.condition?.icon || ""}
                feelslike={currentWeather?.current?.feelslike_c ?? 0}
                humidity={currentWeather?.current?.humidity ?? 0}
              />
            </Box>
            <Divider orientation="vertical" />
            <ForecastStack
              forecast={forecastWeather?.forecast.forecastday || []}
              days={2}
              fullHeight
            />
          </Stack>
        </Paper>
      );
    case "large":
      return (
        <Paper sx={{ height: "100%" }}>
          <Stack
            sx={{ height: "100%" }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={2}
            >
              <LargeInfo
                condition={currentWeather?.current?.condition?.text || "N/A"}
                country={currentWeather?.location?.country || "N/A"}
                name={currentWeather?.location?.name || "N/A"}
                temperature={currentWeather?.current?.temp_c ?? 0}
                icon={currentWeather?.current?.condition?.icon || ""}
                feelslike={currentWeather?.current?.feelslike_c ?? 0}
                humidity={currentWeather?.current?.humidity ?? 0}
                uv={currentWeather?.current?.uv ?? 0}
                wind={currentWeather?.current?.wind_kph ?? 0}
              />
            </Stack>
            
            <ForecastStack
              forecast={forecastWeather?.forecast.forecastday || []}
              days={4}
            />
          </Stack>
        </Paper>
      );

    default:
      return null;
  }
};

export default WeatherWidget;
