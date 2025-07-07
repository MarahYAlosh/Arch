import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SectionThreeStyles from "../styles/SectionThreeStyle";
import { motion } from "framer-motion";
import pic from "../../assets/images/whyChoose.png";
import { AboutSectionThreeStyles } from "../styles/AboutSectionThreeStyles";
import { useTranslation } from "react-i18next";
export const SectionThree = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ background: "#000" }}>
      <Box sx={SectionThreeStyles.root}>
        <Grid container sx={SectionThreeStyles.gridContainer}>
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
            <Typography
              variant="h4"
              gutterBottom
              sx={AboutSectionThreeStyles.heading}
            >
              {t("WhyChooseUs.heading")}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={AboutSectionThreeStyles.paragraph}
            >
              {t("WhyChooseUs.paragraph1")}
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={AboutSectionThreeStyles.paragraph}
            >
              {t("WhyChooseUs.paragraph2")}
            </Typography>
          </Grid>

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
            <Box sx={AboutSectionThreeStyles.imageWrapper}>
              <Box sx={AboutSectionThreeStyles.imageContainer}>
                <Box
                  component="img"
                  src="https://placehold.co/696x483/cccccc/cccccc"
                  alt="gray background"
                  sx={AboutSectionThreeStyles.grayImage}
                />
                <Box
                  component="img"
                  src={pic}
                  alt="main"
                  sx={AboutSectionThreeStyles.mainImage}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
