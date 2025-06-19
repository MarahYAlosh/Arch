import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  containerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../styles/SectionTwoStyle";
import { images } from "../../utils/data";
import {
  mobileImageStyle,
  largeWrapperStyle,
  imageLeftStyle,
  imageTopRightStyle,
  imageBottomLeftStyle,
  imageBottomRightStyle,
} from "../styles/AboutSectionFourStyles";
export const SectionFour = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

      {isMobile ? (
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "1fr",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <Box component="img" src={images[0].src} sx={mobileImageStyle} />
          <Box component="img" src={images[2].src} sx={mobileImageStyle} />
          <Box component="img" src={images[1].src} sx={mobileImageStyle} />
          <Box component="img" src={images[1].src} sx={mobileImageStyle} />
        </Box>
      ) : (
        <Box sx={largeWrapperStyle}>
          <Box
            component="img"
            src={images[0].src}
            alt="يسار"
            sx={imageLeftStyle}
          />
          <Box
            component="img"
            src={images[2].src}
            alt="يمين فوق"
            sx={imageTopRightStyle}
          />
          <Box
            component="img"
            src={images[1].src}
            alt="يمين أسفل يسار"
            sx={imageBottomLeftStyle}
          />
          <Box
            component="img"
            src={images[2].src}
            alt="يمين أسفل يمين"
            sx={imageBottomRightStyle}
          />
        </Box>
      )}
    </Box>
  );
};
