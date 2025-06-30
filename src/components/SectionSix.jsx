import React from "react";
import { Box, Card, Typography, IconButton, Grid, Button } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  containerStyle,
  servicesContainerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "./styles/SectionTwoStyle";
import PropertyCard from "./PropertyCard";
import { properties } from "../utils/data";
import { slideButtonStyle } from "./styles/SlideStyle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SectionSix = () => {
  const MotionBox = motion(Box);
  return (
    <Box sx={containerStyle}>
      <Box sx={titleWrapperStyle}>
        <Box sx={titleBoxStyle}>
          <Typography variant="h4" gutterBottom sx={titleStyle}>
            أحدث العقارات
          </Typography>
          <Box sx={underlineStyle} />
        </Box>
      </Box>

      <Box sx={servicesContainerStyle}>
        {properties.map((property, index) => (
          <MotionBox
            key={index}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard {...property} />
            </Grid>
          </MotionBox>
        ))}
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to={`/properties`} style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" sx={slideButtonStyle}>
            معرفة المزيد
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
