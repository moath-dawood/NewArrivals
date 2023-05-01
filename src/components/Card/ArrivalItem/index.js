import React from "react";
import { Typography, Box } from "@mui/material";

const ArrivalItem = ({ title, description }) => {
  return (
    <Box
      height={"100%"}
      display={"flex"}
      sx={{ justifyContent: "flex-end" }}
      flexDirection={"column"}
    >
      <Typography
        sx={{
          bottom: 0,
          fontFamily: "Inter",
          fontWeight: "500",
          textAlign: "left",
          fontSize: "32px",
          paddingBottom: "10px",
          letterSpacing: "0.03em",
          color: "white",
          marginLeft: "30px",
          fontFamily: "sans-serif",
        }}
        bool="true"
        children={title}
      />
      <Typography
        sx={{
          fontWeight: "300",
          fontSize: "14px",
          width: "40%",
          textAlign: "left",
          paddingBottom: "10px",
          color: "white",
          marginLeft: "30px",
          fontFamily: "sans-serif",
        }}
        bool="true"
        children={description}
      />
      <Typography
        sx={{
          fontWeight: "300",
          fontSize: "16px",
          color: "white",
          marginTop: "0.5em",
          marginBottom: "2em",
          borderBottom: "1px solid gray",
          width: "fit-content",
          marginLeft: "30px",
          fontFamily: "sans-serif",
        }}
      >
        {"Shop Now"}
      </Typography>
    </Box>
  );
};
export default ArrivalItem;
