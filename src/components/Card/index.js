import React from "react";
import ArrivalItem from "./ArrivalItem/index";
import { Grid, Box } from "@mui/material";

const NewArrival = () => {
  return (
    <Grid
      container
      width={"86%"}
      textAlign={"center"}
      m={"auto"}
      spacing={"30px"}
    >
      <Grid item xs={12} md={6} sx={{ height: "600px" }}>
        <Box
          borderRadius={"5px"}
          bgcolor={"black"}
          sx={{
            backgroundImage: `url("/images/Playstation.png")`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
          width={"100%"}
          height={"100%"}
        >
          <ArrivalItem
            title={"PlayStation 5"}
            description={
              "Black and White version of the PS5 coming out on sale"
            }
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ padding: 0 }}>
        <Grid container spacing={"30px"}>
          <Grid item xs={12} sx={{ height: "300px" }}>
            <Box
              borderRadius={"5px"}
              bgcolor={"rgba(13,13,13,255)"}
              sx={{
                backgroundImage: `url("/images/Woman.png")`,
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
              }}
              width={"100%"}
              height={"100%"}
            >
              <ArrivalItem
                title={"Women's Collections"}
                description={
                  "Featured woman collections that give you another vibe."
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ height: "300px" }}>
            <Box
              borderRadius={"5px"}
              bgcolor={"black"}
              sx={{
                backgroundImage: `url("/images/speaker.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              width={"100%"}
              height={"100%"}
            >
              <ArrivalItem
                title={"Speakers"}
                description={"Amazon wireless speakers"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ height: "300px" }}>
            <Box
              borderRadius={"5px"}
              bgcolor={"black"}
              sx={{
                backgroundImage: `url("/images/perfume.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              width={"100%"}
              height={"100%"}
            >
              <ArrivalItem
                title={"Perfume"}
                description={"GUCCI INTENSE OUD EDP"}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewArrival;
