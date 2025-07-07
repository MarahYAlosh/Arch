import React, { useState } from "react";
import { Box, Grid, Card, CardMedia } from "@mui/material";
import pic1 from "../assets/images/works1.jpg";
import pic2 from "../assets/images/works2.jpg";
import pic3 from "../assets/images/works3.jpg";
export const DetailProjectImage = () => {
  const images = [
    {
      id: 1,
      src: pic1,
      label: "Main Image",
    },
    {
      id: 2,
      src: pic2,
      label: "After",
    },
    {
      id: 3,
      src: pic1,
      label: "Before",
    },
    {
      id: 4,
      src: pic3,
      label: "Work Time",
    },
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState(images.slice(1));

  const handleThumbnailClick = (clickedImage) => {
    const newThumbnails = thumbnails.map((thumb) =>
      thumb.id === clickedImage.id ? mainImage : thumb
    );
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%", p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ width: "100%", height: { xs: "300px", md: "500px" } }}>
            <CardMedia
              component="img"
              height="500"
              image={mainImage.src}
              alt={mainImage.label}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={4} container direction="column" spacing={2}>
          {thumbnails.map((thumb) => (
            <Grid item key={thumb.id}>
              <Card
                onClick={() => handleThumbnailClick(thumb)}
                sx={{
                  cursor: "pointer",
                  width: "100%",
                  height: { xs: "80px", sm: "120px", md: "150px" },
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={thumb.src}
                  alt={thumb.label}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
