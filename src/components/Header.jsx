import React, { useState } from "react";

import { Link } from "react-router-dom";




 import { motion } from "framer-motion";

const pages = ["Home", "About", "Services", "Contact"];
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const Header = () => {
  const [open, setOpen] = useState(false);

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
    //   <motion.div
    //   initial={{ y: -50, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ duration: 0.5 }}
    // >
    <AppBar
      position="static"
      sx={{ background: "#3d4a57eb", padding: { xs: "10px 0", md: "15px 0" } }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Typography
              variant="h6"
              sx={{ color: "white", textDecoration: "none" }}
            >
              شعار
            </Typography>
          </Link>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  mx: 1,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#2c3e50",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page) => (
            <ListItem
              button
              key={page}
              onClick={toggleDrawer(false)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={page}
                sx={{ "& span": { color: "white", fontSize: "1rem" } }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
    // </motion.div>
  );
};
