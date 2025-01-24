"use client";
import { WeatherCurrent, WeatherForecast } from "@/types/types";
import { Box, Button, Grid, TextField } from "@mui/material";
import EmptyCell from "./EmptyCell";
import WeatherWidget from "./WeatherWidget";
import { useEffect, useState } from "react";
import { getCityCurrentWeather, getCityForecastWeather } from "@/api/weather";
import { useWeather } from "@/context/WeatherProvider";
import CellLoader from "./CellLoader";

interface PageContentProps {
  currentWeather: WeatherCurrent;
  forecastWeather: WeatherForecast;
}

const PageContent: React.FC<PageContentProps> = ({
  currentWeather,
  forecastWeather,
}) => {
  const { setCurrentWeather, setForecastWeather } = useWeather();
  const [cityName, setCityName] = useState("");
  const [currentError, setCurrentError] = useState<string | null>(null);
  const [forecastError, setForecastError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    setCurrentError(null);
    setForecastError(null);
    setLoading(true);

    try {
      const newCurrent = await getCityCurrentWeather(cityName);
      setCurrentWeather(newCurrent);
    } catch (error) {
      console.error("Error fetching current weather:", error);
      setCurrentError("Failed to fetch current weather for city:" + cityName);
    }

    try {
      const newForecast = await getCityForecastWeather(cityName);
      setForecastWeather(newForecast);
    } catch (error) {
      console.error("Error fetching forecast weather:", error);
      setForecastError("Failed to fetch forecast weather for city:" + cityName);
    }

    setLoading(false);
  };

  useEffect(() => {
    setCurrentWeather(currentWeather);
    setForecastWeather(forecastWeather);
  }, []);

  return (
    <Box
      maxWidth={"500px"}
      m={"auto"}
      display={"flex"}
      justifyContent={"center"}
      p={1}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
        <Box display={"flex"} gap={1}>
          <TextField
            fullWidth
            id="city"
            label="Search city"
            variant="outlined"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            error={currentError !== null || forecastError !== null}
            helperText={
              currentError ? currentError : forecastError ? forecastError : ""
            }
          />
          <Button
            sx={{ height: "56px" }}
            variant="contained"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Grid
          container
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(10, 1fr)",
            gap: 1,
            height: "100vh",
            padding: 1,
          }}
        >
          <Box
            sx={{
              gridArea: "1 / 1 / 3 / 3",
              borderRadius: 1,
            }}
          >
            <CellLoader loading={loading}>
              <WeatherWidget size="small" />
            </CellLoader>
          </Box>
          <Box
            sx={{
              gridArea: "1 / 3 / 2 / 4",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "1 / 4 / 2 / 5",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "2 / 3 / 3 / 4",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "2 / 4 / 3 / 5",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "3 / 1 / 5 / 5",
              borderRadius: 1,
            }}
          >
            <CellLoader loading={loading}>
              <WeatherWidget size="wide" />
            </CellLoader>
          </Box>
          <Box
            sx={{
              gridArea: "5 / 1 / 9 / 5",
              borderRadius: 1,
            }}
          >
            <CellLoader loading={loading}>
              <WeatherWidget size="large" />
            </CellLoader>
          </Box>
          <Box
            sx={{
              gridArea: "9 / 1 / 10 / 2",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "9 / 2 / 10 / 3",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "9 / 3 / 10 / 4",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "9 / 4 / 10 / 5",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "10 / 1 / 11 / 2",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "10 / 2 / 11 / 3",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "10 / 3 / 11 / 4",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
          <Box
            sx={{
              gridArea: "10 / 4 / 11 / 5",
              borderRadius: 1,
            }}
          >
            <EmptyCell />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageContent;
