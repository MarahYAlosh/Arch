import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import { servicesData } from "../utils/data";
import {
  containerStyle,
  serviceAvatarStyle,
  serviceDescriptionStyle,
  serviceHeaderStyle,
  serviceItemStyle,
  servicesContainerStyle,
  serviceTitleStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "./styles/SectionTwoStyle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const SectionTwo = () => {
  const MotionBox = motion(Box);
  const { t } = useTranslation();
  return (
    <Box sx={containerStyle}>
      <Box sx={titleWrapperStyle}>
        <Box sx={titleBoxStyle}>
          <Typography variant="h4" gutterBottom sx={titleStyle}>
            {t("OurServices")}
          </Typography>
          <Box sx={underlineStyle} />
        </Box>
      </Box>

      <Box sx={servicesContainerStyle}>
        {servicesData.map((service, index) => (
          <MotionBox
            key={index}
            sx={serviceItemStyle}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Box>
              <Box sx={serviceHeaderStyle}>
                <Typography sx={serviceTitleStyle}>
                  {t(service.titleKey)}
                </Typography>
                <Avatar
                  src={service.image}
                  variant="rounded"
                  sx={serviceAvatarStyle}
                />
              </Box>
              <Typography variant="body2" sx={serviceDescriptionStyle}>
                {t(service.descriptionKey)}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};
