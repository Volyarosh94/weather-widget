import { Stack, Typography } from "@mui/material";
import Image from "next/image";

interface SmallInfoProps {
  country: string;
  name: string;
  temperature: number;
  icon: string;
  condition: string;
  feelslike: number;
  humidity: number;
}

const SmallInfo: React.FC<SmallInfoProps> = ({
  country,
  name,
  temperature,
  icon,
  condition,
  feelslike,
  humidity,
}) => {
  return (
    <>
      <Stack>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          {country}, {name}
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          {temperature}°C
        </Typography>
      </Stack>
      {icon && (
        <Image
          width={48}
          height={48}
          src={`http:${icon}`}
          alt="Weather Icon"
          objectFit="cover"
          className="min-w-12"
        />
      )}
      <Stack gap={0.5}>
        <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
          {condition}
        </Typography>
        <Stack direction={"row"} gap={0.5} flexWrap={"wrap"}>
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            Feels: {feelslike}°C
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            Humidity: {humidity}%
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SmallInfo;
