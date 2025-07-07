import React from "react";

import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import pic from "../../assets/images/about.jpg";
import pic2 from "../../assets/images/about2.jpg";
import SectionThreeStyles from "../styles/SectionThreeStyle";
import { useTranslation } from "react-i18next";
export const SectionOne = () => {
  const { t } = useTranslation();
  return (
    <Box sx={SectionThreeStyles.root}>
      <Grid container sx={SectionThreeStyles.gridContainer}>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          sx={SectionThreeStyles.imageSection}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              mt: 8,
            }}
          >
            <Box
              component="img"
              src={pic}
              alt="pic1"
              sx={{
                width: { xs: "70%", sm: "77%", md: "50%" },
                alignSelf: "center",
                mr: { xs: "1rem", sm: "2rem", md: "3rem" },
              }}
            />
            <Box
              component="img"
              src={pic2}
              alt="pic2"
              sx={{
                width: { xs: "70%", sm: "80%", md: "55%" },
                alignSelf: "center",
                ml: { xs: "1rem", sm: "2rem", md: "3rem" },
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          sx={SectionThreeStyles.textSection}
        >
          <Typography variant="h4" gutterBottom sx={SectionThreeStyles.heading}>
            {t("SectionThreeAbout.heading")}
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            {t("SectionThreeAbout.paragraph1")}
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            {t("SectionThreeAbout.paragraph2")}
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            {t("SectionThreeAbout.paragraph3")}
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            {t("SectionThreeAbout.paragraph4")}
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            {t("SectionThreeAbout.paragraph5")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
