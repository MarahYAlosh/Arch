import React from "react";
import { MainHeader } from "../components/MainHeader";
import styles from "../components/styles/SectionThreeStyle";
import { motion } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";
import bigPicture from "../assets/images/detail.jpg";
import smallPicture from "../assets/images/detail1.jpg";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Header } from "../components/Header";
import { propertyStyles } from "../components/styles/DetailPropertyStyle";
import { useTranslation } from "react-i18next";

export const DetailProperty = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <MainHeader text={t("NavbarProperties")} />

      <Grid container sx={styles.gridContainer}>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          sx={styles.textSection}
        >
          <Typography variant="h4" gutterBottom sx={styles.heading}>
            {t("propertyDetails.title")}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOnIcon fontSize="small" sx={{ color: "gray", mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {t("propertyDetails.location")}
            </Typography>
          </Box>

          <Typography variant="subtitle1" sx={styles.subtitle}>
            {t("propertyDetails.description")}
          </Typography>
          <Grid
            container
            spacing={1}
            textAlign="center"
            justifyContent="space-between"
          >
            <Grid item xs={2}>
              <Box sx={propertyStyles.featureBox}>
                <Typography variant="body2" sx={propertyStyles.featureText}>
                  {t("propertyDetails.features.beds")}
                </Typography>
                <BedIcon fontSize="x-small" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={propertyStyles.featureBox}>
                <Typography variant="body2" sx={propertyStyles.featureText}>
                  {t("propertyDetails.features.baths")}
                </Typography>
                <BathtubIcon fontSize="x-small" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={propertyStyles.featureBox}>
                <Typography variant="body2" sx={propertyStyles.featureText}>
                  {t("propertyDetails.features.area")}
                </Typography>
                <SquareFootIcon fontSize="x-small" />
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h6" color="error" fontWeight="bold">
            {t("propertyDetails.price")}
          </Typography>

          <Button variant="contained" size="large" sx={styles.button}>
            {t("propertyDetails.contactButton")}
          </Button>
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
          sx={styles.imageSection}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              component="img"
              src={bigPicture}
              alt="Main Property"
              sx={propertyStyles.bigImage}
            />

            <Grid
              container
              spacing={2}
              justifyContent="center"
              maxWidth="700px"
            >
              {[1, 2, 3, 4].map((_, index) => (
                <Grid item key={index}>
                  <Box
                    component="img"
                    src={smallPicture}
                    alt={`Small ${index + 1}`}
                    sx={propertyStyles.smallImage}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
