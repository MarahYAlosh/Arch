import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ProjectCard = ({ project }) => {
  return (
    <Box>
      <Card
        sx={{
          position: "relative",
          height: 250,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0.5,
            }}
          >
            <IconButton sx={{ color: "white" }}>
              <FavoriteIcon />
            </IconButton>
            <Typography variant="h6">{project.title}</Typography>
          </Box>

          <Typography variant="body2" sx={{ fontSize: 12 }}>
            {project.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
