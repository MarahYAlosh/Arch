import { Box, Typography, Button } from "@mui/material";
import {
  slideContentStyle,
  slideInnerContentStyle,
  slideButtonStyle,
} from "./styles/SlideStyle.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SlideItem = ({ image, title, subtitle, height }) => {
  const { t} = useTranslation();
  return (
    <Box className="slide-content" sx={slideContentStyle(image, height)}>
      <Box sx={slideInnerContentStyle}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          {subtitle}
        </Typography>

        <Link to={`/contact`} style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" sx={slideButtonStyle}>
              {t("StartProjectButton")}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
