import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/images/logo.png";
import React from "react";
import { motion } from "framer-motion";
import footerStyles from "./styles/footerStyles";

export const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles.footerBox}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Box sx={footerStyles.logoBox}>
            <img src={logo} alt="ARCH" style={footerStyles.logoImg} />
          </Box>
          <Typography variant="body2" sx={footerStyles.boldWhiteText}>
            ARCH Real Estate.Co
          </Typography>
          <Typography variant="body2" sx={footerStyles.textBody}>
            وهدفكم الأمثل للعقارات الفاخرة نسعى جاهدين لتقديم أفضل الحلول لتلبية
            احتياجات عملائنا مع التركيز على الجودة والابتكار.
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
            الصفحة الرئيسية
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["من نحن", "خدماتنا", "أعمالنا", "ممتلكات"].map((text) => (
              <Link
                key={text}
                href="#"
                color="inherit"
                sx={footerStyles.linkStyle}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={footerStyles.subtitle}>
            خدماتنا
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "تصميم داخلي للمنزل",
              "تصميم خارجي",
              "تصميم الإضاءة",
              "تصميم المكتب",
            ].map((item) => (
              <Typography key={item}>{item}</Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={footerStyles.subtitle}>
            معلومات الاتصال
          </Typography>
          <Typography>info@arcRealeste.com</Typography>
          <Typography sx={footerStyles.contactInfo}>
            ديراز أمينتو سنفيل، كاليفورنيا 9021 دبي
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
