import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/images/logo.png";
import React from "react";
import footerStyles from "./styles/footerStyles";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={footerStyles.footerBox}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Box sx={footerStyles.logoBox}>
            <img src={logo} alt="ARCH" style={footerStyles.logoImg} />
          </Box>
          <Typography variant="body2" sx={footerStyles.boldWhiteText}>
            {t("footer.companyName")}
          </Typography>
          <Typography variant="body2" sx={footerStyles.textBody}>
            {t("footer.companyDescription")}
          </Typography>
          <Box>
            <IconButton
              size="small"
              aria-label="Facebook"
              sx={footerStyles.iconButton}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Twitter"
              sx={footerStyles.iconButton}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-label="Instagram"
              sx={footerStyles.iconButton}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="small"
              aria-label="LinkedIn"
              sx={footerStyles.iconButton}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Typography
            variant="subtitle1"
            sx={{ ...footerStyles.subtitle, textDecoration: "none" }}
          >
            {t("footer.mainPage")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["about", "services", "works", "properties"].map((key) => (
              <Link
                key={key}
                href="#"
                color="inherit"
                sx={footerStyles.linkStyle}
              >
                {t(`footer.links.${key}`)}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={footerStyles.subtitle}>
            {t("footer.ourServices")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "interiorDesign",
              "exteriorDesign",
              "lightingDesign",
              "officeDesign",
            ].map((key) => (
              <Typography key={key}>{t(`footer.services.${key}`)}</Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={footerStyles.subtitle}>
            {t("footer.contactInfo")}
          </Typography>
          <Typography>{t("footer.email")}</Typography>
          <Typography sx={footerStyles.contactInfo}>
            {t("footer.address")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
