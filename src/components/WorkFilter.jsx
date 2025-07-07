import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../utils/data";
import { useTranslation } from "react-i18next";

export const WorkFilter = () => {
  const [active, setActive] = useState("كل الأعمال");
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1.5,
          width: "75%",
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActive(cat)}
            disableElevation
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              px: 3,
              py: 1,
              mb: 4,
              borderRadius: 0,
              bgcolor: active === cat ? "#FFF8F6" : "transparent",
              border: active === cat ? "1px solid #000" : "none",
              color: "#000",
              "&:hover": {
                bgcolor: active === cat ? "#FFF1EC" : "#f9f9f9",
              },
            }}
          >
            {t(cat.nameKey)}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
