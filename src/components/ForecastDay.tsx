import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ForecastDayProps {
  date: string;
  weatherName: string;
  maxTemp: number;
  minTemp: number;
  icon: string;
}

const ForecastDay: React.FC<ForecastDayProps> = ({
  date,
  weatherName,
  maxTemp,
  minTemp,
  icon,
}) => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} p={1}>
      <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
        {new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
        })}
      </Typography>
      <Image src={icon} width={32} height={32} alt={weatherName} />
      <Typography
        variant="body2"
        sx={{ fontSize: "0.75rem" }}
        textAlign={"center"}
      >
        {weatherName}
      </Typography>
      <Stack direction={"row"} gap={1}>
        <Typography
          variant="caption"
          color="error"
          sx={{ fontSize: "0.75rem" }}
        >
          {maxTemp}°C
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="caption" color="info" sx={{ fontSize: "0.75rem" }}>
          {minTemp}°C
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ForecastDay;
