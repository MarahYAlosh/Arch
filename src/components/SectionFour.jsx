import React from "react";
import {
  containerStyle,
  serviceItemStyle,
  servicesContainerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "./styles/SectionTwoStyle";
import { Box, Grid, Typography } from "@mui/material";
import { projects } from "../utils/data";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export const SectionFour = () => {
  const MotionBox = motion(Box);
  return (
    <Box sx={containerStyle}>
      <Box sx={titleWrapperStyle}>
        <Box sx={titleBoxStyle}>
          <Typography variant="h4" gutterBottom sx={titleStyle}>
            أعمالنا
          </Typography>
          <Box sx={underlineStyle} />
        </Box>
      </Box>

      <Box sx={servicesContainerStyle}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            sx={serviceItemStyle}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProjectCard project={project} />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};
