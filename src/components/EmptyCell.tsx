import { Skeleton } from "@mui/material";

const EmptyCell = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{
        borderRadius: 1,
      }}
      width="100%"
      height="100%"
    />
  );
};

export default EmptyCell;
