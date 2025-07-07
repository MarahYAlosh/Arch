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
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ModalFilter } from "./ModalFilter";
export default function PropertiesFilters() {
  const { t } = useTranslation();
  const MotionBox = motion(Box);
  const [tabValue, setTabValue] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [type, setType] = useState("");

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };











    const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <Box sx={containerStyle}>
    <ModalFilter open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>
      <Box sx={tabsWrapperStyle}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="standard"
          centered
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={tabsStyle}
        >
          <Tab label={t("propertiesFilters.tabs.rent")} />
          <Tab label={t("propertiesFilters.tabs.sale")} />
          <Tab label={t("propertiesFilters.tabs.all")} />
        </Tabs>
      </Box>

      <Box sx={filterBoxStyle}>
        <TextField
          placeholder={t("propertiesFilters.searchPlaceholder")}
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
            <MenuItem value="">{t("propertiesFilters.types.all")}</MenuItem>
            <MenuItem value="شقة">
              {t("propertiesFilters.types.apartment")}
            </MenuItem>
            <MenuItem value="فيلا">
              {t("propertiesFilters.types.villa")}
            </MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" sx={searchButtonStyle}>
          {t("propertiesFilters.buttons.search")}
        </Button>

        <Button
          variant="outlined"
          startIcon={<FilterAltOutlinedIcon />}
          sx={filterButtonStyle}
          onClick={handleOpen}
        >
          {t("propertiesFilters.buttons.filter")}
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
              <Link
                to={`/properties/detail`}
                style={{ textDecoration: "none" }}
              >
                <PropertyCard {...property} />
              </Link>
            </Grid>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
