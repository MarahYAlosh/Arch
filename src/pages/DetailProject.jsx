import React from "react";
import { Header } from "../components/Header";
import { MainHeader } from "../components/MainHeader";
import { useTranslation } from "react-i18next";
import styles from "../components/styles/SectionFourStyle";
import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import { DetailProjectImage } from "../components/DetailProjectImage";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonIcon from "@mui/icons-material/Person";
import {
  titleBoxStyle,
  titleStyle,
  underlineStyle,
} from "../components/styles/SectionTwoStyle";

export const DetailProject = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <MainHeader text={t("NavbarProperties")} />
      <Box
        sx={{
          py: 8,
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={titleBoxStyle}>
          <Typography variant="h4" gutterBottom sx={titleStyle}>
            {t("NavbarOurWork")}
          </Typography>

          <Box sx={underlineStyle} />
        </Box>
      </Box>

      <DetailProjectImage />
      <Box sx={{ width: "100%", margin: "0 16%", p: 2, lineHeight: "43px" }}>
        <Typography variant="h5" mb={1.5}>
          {" "}
          {t("detailProject.description")}
        </Typography>
        <Typography variant="body2">
          {t("detailProject.descriptionText")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <LocationOnOutlinedIcon />
          <Typography variant="h7"> {t("detailProject.location")} </Typography>
          <Typography variant="body2">
            {t("detailProject.detailLocation")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon />
          <Typography variant="h7">
            {" "}
            {t("detailProject.Completiondate")}
          </Typography>
          <Typography variant="body2">23/4/2023</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <PersonIcon />
          <Typography variant="h7"> {t("detailProject.Client")} </Typography>
          <Typography variant="body2">
            {t("detailProject.detailClient")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
