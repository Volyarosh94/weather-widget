import { Stack, Typography } from "@mui/material";
import Image from "next/image";

interface LargeInfoProps {
  country: string;
  name: string;
  temperature: number;
  icon: string;
  condition: string;
  feelslike: number;
  humidity: number;
  uv: number;
  wind: number;
}

const LargeInfo: React.FC<LargeInfoProps> = ({
  country,
  name,
  temperature,
  icon,
  condition,
  feelslike,
  humidity,
  uv,
  wind,
}) => {
  return (
    <>
      <Stack>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          {country}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.125rem" }}>
          {temperature}°C
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
          {condition}
        </Typography>
      </Stack>
      {icon && (
        <Image
          width={80}
          height={80}
          src={`http:${icon}`}
          alt="Weather Icon"
          objectFit="cover"
          className="min-w-20"
        />
      )}
      <Stack textAlign={"right"}>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          Feels: {feelslike}°C
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          Humidity: {humidity}%
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          Wind: {wind}km/h
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
          UV: {uv}
        </Typography>
      </Stack>
    </>
  );
};

export default LargeInfo;
