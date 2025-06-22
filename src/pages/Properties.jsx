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

export const Properties = () => {
  return (
    <>
      <Header />
      <MainHeader text=" عقاراتنا" />
      <Box sx={containerStyle}>
        <Box sx={titleWrapperStyle}>
          <Box sx={titleBoxStyle}>
            <Typography variant="h4" gutterBottom sx={titleStyle}>
              عقاراتنا
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
            استكشف مجموعة متنوعة من العقارات المميزة التي تناسب جميع احتياجاتك،
            حيث نقدم لك خيارات متنوعة من الشقق والمنازل، مع تقديم تفاصيل دقيقة
            وصور توضيحية لمساعدتك في اتخاذ القرار المثالي
          </Typography>
        </Box>
        <PropertiesFilters />
      </Box>
    </>
  );
};
