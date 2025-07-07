import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Container,
  Drawer,
  MenuItem,
  Select,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

import { pagesHeader } from "../utils/data";
import {
  appBarStyle,
  toolbarStyle,
  languageSelectStyle,
  navButtonStyle,
  drawerPaperStyle,
  drawerCloseIconStyle,
  drawerListBoxStyle,
  drawerButtonStyle,
} from "./styles/headerStyles";
import SectionThreeStyles from "./styles/SectionThreeStyle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export const Header = ({ main = false }) => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language || "ar");

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="static" sx={appBarStyle}>
        <Container maxWidth="xl">
          <Toolbar sx={toolbarStyle}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <img style={{ width: "100%", height: "45px" }} src={logo} />
              </Link>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "row",
                  mr: 5,
                }}
              >
                {pagesHeader.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    sx={navButtonStyle(location.pathname === page.path)}
                  >
                    {t(page.nameKey)}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton onClick={toggleDrawer(true)} sx={{ color: "#333" }}>
                  <MenuIcon />
                </IconButton>
              </Box>
              {main ? (
                <Select
                  value={language}
                  onChange={handleLanguageChange}
                  variant="standard"
                  disableUnderline
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="ar"> العربية</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              ) : (
                <Link to={`/contact`} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={SectionThreeStyles.button}
                  >
                    {t("contactButton")}
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </Container>

        <Drawer
          anchor="top"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{ "& .MuiDrawer-paper": drawerPaperStyle }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)} sx={drawerCloseIconStyle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={drawerListBoxStyle}>
            {pagesHeader.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={toggleDrawer(false)}
                sx={drawerButtonStyle}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Drawer>
      </AppBar>
    </motion.div>
  );
};
