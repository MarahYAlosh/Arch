import React from "react";
import { MainHeader } from "../components/MainHeader";
import { Box, Typography } from "@mui/material";
import {
  containerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../components/styles/SectionTwoStyle";
import { SectionService } from "../components/SectionService";
import pic1 from "../assets/images/service1.jpg";
import pic2 from "../assets/images/service2.jpg";
import pic3 from "../assets/images/service3.jpg";
import pic4 from "../assets/images/service4.jpg";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
export const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <MainHeader text={t("Services")} />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              {t("ServicesSection.title")}
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
            {t("ServicesSection.subtitle")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "90px" }}>
          <SectionService
            title={t("apartmentFinishingTitle")}
            text={t("apartmentFinishingText")}
            img={pic1}
            reverse={false}
          />

          <SectionService
            title={t("interiorDesignTitle")}
            text={t("interiorDesignText")}
            img={pic2}
            reverse={true}
          />

          <SectionService
            title={t("realEstateTitle")}
            text={t("realEstateText")}
            img={pic3}
            reverse={false}
          />

          <SectionService
            title={t("projectManagementTitle")}
            text={t("projectManagementText")}
            img={pic4}
            reverse={true}
          />
        </Box>
      </Box>
    </>
  );
};
