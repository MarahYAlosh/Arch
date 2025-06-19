import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { cardStyle, imageStyle, overlayStyle } from "./styles/MemberCardStyle";
export const MemberCard = ({ member }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        image={member.image}
        alt="member"
        sx={imageStyle}
      />

      <Box sx={overlayStyle}>
        <Typography variant="subtitle1" fontWeight="bold">
          {member.title}
        </Typography>
        <Typography variant="subtitle2">{member.description}</Typography>
      </Box>
    </Card>
  );
};
