import React from "react";
import { MainHeader } from "../components/MainHeader";
import {
  containerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../components/styles/SectionTwoStyle";
import { Box, Typography } from "@mui/material";
import PropertiesFilters from "../components/PropertiesFilters";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";

export const Properties = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <MainHeader text={t("NavbarProperties")} />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              {t("realEstate.title")}
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
            {t("realEstate.description")}
          </Typography>
        </Box>
        <PropertiesFilters />
      </Box>
    </>
  );
};
