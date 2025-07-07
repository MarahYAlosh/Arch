import {
  Modal,
  Box,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
export const ModalFilter = ({ open, handleClose }) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6"> {t("ModalFilter.Filter")} </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography gutterBottom> {t("ModalFilter.Price")}</Typography>
        <Box display="flex" alignItems="center">
          <Slider
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="on"
            sx={{ flex: 1 }}
          />
        </Box>

        <Typography gutterBottom mt={2}>
          {t("ModalFilter.Area")}
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox name="small" />}
            label={t("ModalFilter.Small")}
          />
          <FormControlLabel
            control={<Checkbox name="medium" />}
            label={t("ModalFilter.Medium")}
          />
          <FormControlLabel
            control={<Checkbox name="large" />}
            label={t("ModalFilter.Large")}
          />
        </FormGroup>

        <Typography gutterBottom mt={2}>
          {t("ModalFilter.Region")} :
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="region-label">
            {t("ModalFilter.SelectRegion")}
          </InputLabel>
          <Select labelId="region-label" label="Select Region">
            <MenuItem value="north">fdsfd</MenuItem>
            <MenuItem value="south">fdg</MenuItem>
            <MenuItem value="east">Easfghft</MenuItem>
            <MenuItem value="west">fgh</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Modal>
  );
};
