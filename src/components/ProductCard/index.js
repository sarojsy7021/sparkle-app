import React, { useState } from "react"
import { Grid, Box, Typography, Button } from "@mui/material"
import "./style.css"
import { NavLink } from "react-router-dom"

export default function ProductCard({ image, title, }) {

  const [Ishover, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      className="box"
      style={{
        margin: "1.5rem"
      }}
    >
      <Grid item lg={12}>
        <NavLink
          to="/details"
          style={{
            textDecorationLine: "none"
          }}
        >
          <img
            src={image}
            alt={image}
            width="110%"
            style={{
              borderRadius: ".9rem",
              height: "70vh"

            }}
          />
        </NavLink>
      </Grid>
      <Grid item container lg={12} xs={12}
        style={{
          padding: ".2rem"
        }}

      >
        <Grid item xs={7} lg={8}>
          <Typography
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              fontFamily: "sans-serif",
              marginTop: "1rem"
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item lg={3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* <Typography
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              fontFamily: "sans-serif",
              marginTop: "1rem",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            Explor
          </Typography> */}
          <Button>
            Explore
          </Button>
        </Grid>
      </Grid>
    </Box>
  )

}