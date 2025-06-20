import React from "react";
import { MainHeader } from "./MainHeader";
import { Box, Button, Typography } from "@mui/material";
import {
  containerStyle,
  serviceItemStyle,
  servicesContainerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "./styles/SectionTwoStyle";
import { projects } from "../utils/data";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { WorkFilter } from "./WorkFilter";

export const Works = () => {
  const MotionBox = motion(Box);

  return (
    <>
      <MainHeader text=" أعمالنا" />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              أعمالنا
            </Typography>

            <Box sx={underlineStyle} />
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: "center",
              p: 2,
              width: { xs: "90%", sm: "68%", md: "52%" },
            }}
          >
            نقدم لكم مجموعة متنوعة من أعمال التصميم الداخلي المبتكرة التي نفذتها
            شركتنا، حيث تعكس كل منها التزامنا بالجودة والاحترافية، وتظهر تفانينا
            في تلبية احتياجات عملائنا وتطلعاتهم من خلال تصميمات فريدة تجمع بين
            الجمال والوظيفة.
          </Typography>
        </Box>
        <WorkFilter />

        <Box sx={servicesContainerStyle}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              sx={serviceItemStyle}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <ProjectCard project={project} />
            </MotionBox>
          ))}
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              sx={serviceItemStyle}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <ProjectCard project={project} />
            </MotionBox>
          ))}
        </Box>
      </Box>
    </>
  );
};
