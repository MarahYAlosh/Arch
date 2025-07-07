import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import pic from "../assets/images/tasmem.png";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./styles/SectionThreeStyle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export const SectionThree = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={styles.root}>
      <Grid container sx={styles.gridContainer}>
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
            {t("BrillianceTitle")}
          </Typography>

          <Typography variant="body1" paragraph sx={styles.paragraph}>
            {t("BrillianceDesc")}
          </Typography>

          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel1" ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{t("FirstIdeaTitle")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("FirstIdeaDesc")}</AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel2" ? <RemoveIcon /> : <AddIcon />
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">{t("SecondIdeaTitle")}</Typography>
              </AccordionSummary>
              <AccordionDetails>{t("SecondIdeaDesc")}</AccordionDetails>
            </Accordion>
          </div>

          <Link to={`/about`} style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large" sx={styles.button}>
              {t("learnMoreButton")}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
