import React from "react";
import styles from "./styles/SectionThreeStyle";
import { motion } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";
export const SectionService = ({ title, text, img, direction }) => {
  return (
    <Box sx={{ direction: direction }}>
      <Box sx={styles.root}>
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
              {title}
            </Typography>

            <Typography variant="body1" paragraph sx={styles.paragraph}>
              {text}
            </Typography>

            <Button variant="contained" size="large" sx={styles.button}>
              اطلب الخدمة
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
            <img src={img} alt="pic" style={styles.image} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
