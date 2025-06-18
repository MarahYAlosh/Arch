import { Box, Typography, Button } from "@mui/material";
import {
  slideContentStyle,
  slideInnerContentStyle,
  slideButtonStyle,
} from "./styles/SlideStyle.js";

export const SlideItem = ({ image, title, subtitle,height }) => {
  return (
    <Box className="slide-content" sx={slideContentStyle(image,height)}>
      <Box sx={slideInnerContentStyle}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          {subtitle}
        </Typography>
        <Button variant="contained" size="large" sx={slideButtonStyle}>
          ابدأ مشروعك
        </Button>
      </Box>
    </Box>
  );
};
