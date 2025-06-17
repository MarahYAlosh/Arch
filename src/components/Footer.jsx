import { Box, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          background: "#3d4a57eb",
          padding: { xs: "10px 0", md: "15px 0" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "white" }}>
          Copyright &copy; 2024 All rights reserved to{" "}
          <strong>Marah Alosh</strong>
        </Typography>
      </Box>
    </motion.div>
  );
};
