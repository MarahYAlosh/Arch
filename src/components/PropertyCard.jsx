import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PropertyCard = ({ image, title, location, price, beds, baths, area }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        maxWidth: 350,
        mx: "auto",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "black",
            color: "white",
            px: 1.5,
            py: 0.5,
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          للبيع
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 75,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "12%",
          backgroundColor: "white",
          px: 1,
          py: 1,
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Grid
          container
          spacing={1}
          textAlign="center"
          justifyContent="space-between"
        >
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ fontSize: "11px" }}
              >
                {beds} أسرة
              </Typography>
              <BedIcon fontSize="x-small" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ fontSize: "11px" }}
              >
                حمام {baths}
              </Typography>
              <BathtubIcon fontSize="x-small" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ fontSize: "11px" }}
              >
                قدم مربع {area}
              </Typography>
              <SquareFootIcon fontSize="x-small" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ px: 2, pb: 2, direction: "rtl" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="error" fontWeight="bold">
            ${price.toLocaleString()}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOnIcon fontSize="small" sx={{ color: "gray", mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default PropertyCard;
