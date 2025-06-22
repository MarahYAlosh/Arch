import React, { useState } from "react";
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
export const Header = ({ main = false }) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("ar");
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

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
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
                  sx={languageSelectStyle}
                >
                  <MenuItem value="ar">العربية</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              ) : (
                <Link to={`/contact`} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={SectionThreeStyles.button}
                  >
                    تواصل معنا
                  </Button>
                </Link>
              )}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "row-reverse",
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
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Link to="/">
                <img style={{ width: "100%", height: "45px" }} src={logo} />
              </Link>
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
