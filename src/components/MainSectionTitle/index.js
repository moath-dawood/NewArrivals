import React from "react";
import { Typography } from "@mui/material";
function MainSectionTitle({ label }) {
  return (
    <Typography
      sx={{
        padding: 0,
        margin: "auto",
        fontSize: "30px",
        marginBottom: "60px",
        marginTop: "30px",
        paddingLeft: "50px",
        fontFamily: "sans-serif",
        fontWeight: "600",
        width: "86%",
        textAlign: "left",
      }}
      children={label}
    />
  );
}

export default MainSectionTitle;
