import React from "react";
import { Header } from "../components/Header";
import {
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionThreeStyles from "../components/styles/SectionThreeStyle";
import { formStyles } from "../components/styles/ContactStyle";
import { MainHeader } from "../components/MainHeader";
import { useTranslation } from "react-i18next";
export const Contact = () => {
  const textFieldSx = {
    backgroundColor: "#f0f0f0",
    height: 40,
    "& .MuiInputBase-root": {
      height: 40,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <MainHeader text={t("contactButton")} />
      <Box sx={formStyles.wrapperBox}>
        <Grid container spacing={4} justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            mt={5}
            sx={{
              width: {
                xs: "80%",
                sm: "50%",
                md: "35%",
                lg: "30%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography variant="h4" gutterBottom>
                {t("contact.bookYourProject")}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#7C7C7C" }}
              >
                {t("contact.bookYourProjectDescription")}
              </Typography>
              <Divider sx={{ mb: 2, bgcolor: "#919191", height: "1px" }} />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexDirection="row-reverse"
                p={2}
                gap={2}
              >
                <Stack
                  spacing={0.5}
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography variant="h6" width="100%" fontWeight="bold">
                    {t("contact.locationTitle")}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <Typography variant="body2" color="text.secondary">
                      {t("contact.locationAddress")}
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "black", width: 40, height: 40, ml: 2 }}>
                  <LocationOnIcon sx={{ color: "white" }} />
                </Avatar>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexDirection="row-reverse"
                p={2}
                gap={2}
              >
                <Stack
                  spacing={0.5}
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography variant="h6" width="100%" fontWeight="bold">
                    {t("contact.contactUsTitle")}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="start"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <Typography variant="body2" color="text.secondary">
                      +971 665 87 453 (whats app)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      +971 665 87 453
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "black", width: 40, height: 40, ml: 2 }}>
                  <CallIcon sx={{ color: "white" }} />
                </Avatar>
              </Box>
              <Divider sx={{ mb: 2, bgcolor: "#919191", height: "1px" }} />

              <Typography mt={3} variant="h5">
                {t("contact.followUs")}
              </Typography>
              <Box display="flex" justifyContent="right" gap="15px" mt={1}>
                <Box
                  sx={{
                    background: "#313131",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <FacebookIcon sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    background: "#313131",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <InstagramIcon sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    background: "#313131",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <LinkedInIcon sx={{ color: "white" }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: {
                xs: "80%",
                sm: "50%",
                md: "35%",
                lg: "30%",
              },
            }}
          >
            <Paper sx={formStyles.paper} elevation={5}>
              <Typography variant="h4" gutterBottom>
                {t("contact.appointmentTitle")}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {t("contact.appointmentDescription")}
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ mt: 2 }}
              >
                <Grid container spacing={2} direction="column">
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {t("contact.fullName")}
                    </Typography>
                    <TextField fullWidth variant="outlined" sx={textFieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {t("contact.phoneNumber")}
                    </Typography>
                    <TextField fullWidth variant="outlined" sx={textFieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {t("contact.serviceType")}
                    </Typography>
                    <TextField
                      fullWidth
                      select
                      variant="outlined"
                      sx={textFieldSx}
                    >
                      <MenuItem value="service1">
                        {t("contact.service1")}
                      </MenuItem>
                      <MenuItem value="service2">
                        {t("contact.service2")}
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {t("contact.description")}
                    </Typography>
                    <TextField fullWidth variant="outlined" sx={textFieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom>
                      {t("contact.optionalImages")}
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ backgroundColor: "#f0f0f0" }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={SectionThreeStyles.button}
                >
                  {t("contact.send")}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            background: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            p: 8,
            borderRadius: "10px",
            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ background: "#FFFFFF", color: "#000", p: "5px 50px" }}
          >
            {t("contact.callUsButton")}
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "white",
              gap: "25px",
            }}
          >
            <Typography variant="h6">
              {t("contact.callUsProjectTitle")}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t("contact.callUsProjectDescription")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
