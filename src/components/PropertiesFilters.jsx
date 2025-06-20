import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { servicesContainerStyle } from "./styles/SectionTwoStyle";
import { properties } from "../utils/data";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import {
  containerStyle,
  tabsWrapperStyle,
  tabsStyle,
  filterBoxStyle,
  searchFieldStyle,
  formControlStyle,
  searchButtonStyle,
  filterButtonStyle,
} from "./styles/PropertiesFiltersStyle";
export default function PropertiesFilters() {
  const MotionBox = motion(Box);
  const [tabValue, setTabValue] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [type, setType] = useState("");

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={tabsWrapperStyle}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="standard"
          centered
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={tabsStyle}
        >
          <Tab label="للإيجار" />
          <Tab label="للبيع" />
          <Tab label="الكل" />
        </Tabs>
      </Box>

      <Box sx={filterBoxStyle}>
        <TextField
          placeholder="ادخل كلمة البحث"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          sx={searchFieldStyle}
          InputLabelProps={{ shrink: true }}
        />

        <FormControl sx={formControlStyle}>
          <Select
            labelId="type-label"
            value={type}
            onChange={(e) => setType(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">كل الأنواع</MenuItem>
            <MenuItem value="شقة">شقة</MenuItem>
            <MenuItem value="فيلا">فيلا</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" sx={searchButtonStyle}>
          بحث
        </Button>

        <Button
          variant="outlined"
          startIcon={<FilterAltOutlinedIcon />}
          sx={filterButtonStyle}
        >
          فلترة
        </Button>
      </Box>

      <Box sx={servicesContainerStyle}>
        {properties.map((property, index) => (
          <MotionBox
            key={index}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard {...property} />
            </Grid>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
