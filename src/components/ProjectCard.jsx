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
import styles from "./styles/SectionFourStyle";

export const ProjectCard = ({ project }) => {
  return (
   <Box sx={styles.container}>
      <Card sx={styles.card(project.image)}>
        <Box sx={styles.overlay}>
          <Box sx={styles.header}>
            <IconButton sx={styles.favoriteButton}>
              <FavoriteIcon />
            </IconButton>
            <Typography variant="h6">{project.title}</Typography>
          </Box>
          <Typography variant="body2" sx={styles.description}>
            {project.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};
