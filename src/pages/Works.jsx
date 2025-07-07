import React from "react";
import { MainHeader } from "../components/MainHeader";
import { Box, Button, Typography } from "@mui/material";
import {
  containerStyle,
  serviceItemStyle,
  servicesContainerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../components/styles/SectionTwoStyle";
import { projects } from "../utils/data";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";
import { WorkFilter } from "../components/WorkFilter";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Works = () => {
  const MotionBox = motion(Box);
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <MainHeader text={t("NavbarOurWork")} />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              {t("NavbarOurWork")}
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
            {t("ourWorksText")}
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
              <Link
                to={`/projects/detail`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ProjectCard project={project} />
              </Link>
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
              <Link
                to={`/projects/detail`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ProjectCard project={project} />
              </Link>
            </MotionBox>
          ))}
        </Box>
      </Box>
    </>
  );
};
