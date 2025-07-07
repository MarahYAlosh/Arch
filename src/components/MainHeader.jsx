import React from "react";
import { slideContentStyle, slideInnerContentStyle } from "./styles/SlideStyle";
import image from "../assets/images/aboutBg.jpg";
import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import { useTranslation } from "react-i18next";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
export const MainHeader = ({ text }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const DirectionIcon = isArabic ? ArrowLeftOutlinedIcon : ArrowRightIcon;

  return (
    <Box className="slide-content" sx={slideContentStyle(image, "35vh")}>
      <Box sx={slideInnerContentStyle}>
        <img src={logo} style={{ width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{t("NavbarMain")}</Typography>
          <DirectionIcon />
          <Typography>{text} </Typography>
        </Box>
      </Box>
    </Box>
  );
};
