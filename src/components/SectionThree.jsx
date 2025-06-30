import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import pic from "../assets/images/tasmem.png";
import { motion } from "framer-motion";

import styles from "./styles/SectionThreeStyle";
import { Link } from "react-router-dom";
export const SectionThree = () => {
  return (
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
            تصميم حلمك مع التألق
          </Typography>

          <Typography variant="body1" paragraph sx={styles.paragraph}>
            قم بترقية مساحاتك بتصميمات داخلية مخصصة تعكس أسلوبك الفريد
          </Typography>

          <Typography variant="subtitle1" sx={styles.subtitle}>
            التصميم الداخلي لغرفة المعيشة
          </Typography>
          <Typography variant="subtitle1" sx={styles.subtitle}>
            التصميم داخلي لغرف المكاتب التجارية
          </Typography>
          <Link to={`/about`} style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large" sx={styles.button}>
              معرفة المزيد
            </Button>
          </Link>
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
          <img src={pic} alt="pic" style={styles.image} />
        </Grid>
      </Grid>
    </Box>
  );
};
