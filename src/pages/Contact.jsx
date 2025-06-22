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
  return (
    <>
      <Header />
      <MainHeader text=" تواصل معنا  " />
      <Box sx={formStyles.wrapperBox}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper sx={formStyles.paper} elevation={5}>
              <Typography variant="h4" gutterBottom align="right">
                حجز الموعد
              </Typography>
              <Typography variant="body2" gutterBottom align="right">
                لا تتردد في التواصل معنا لحجز مشروع العمارة المثالي لك، فنحن هنا
                لتحقيق رؤيتك
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ mt: 2 }}
              >
                <Grid container spacing={2} direction="column">
                  <Grid item xs={12}>
                    <Typography align="right" gutterBottom>
                      الاسم الكامل
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={formStyles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="right" gutterBottom>
                      رقم الهاتف
                    </Typography>
                    <TextField fullWidth variant="outlined" sx={textFieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="right" gutterBottom>
                      نوع الخدمة
                    </Typography>
                    <TextField
                      fullWidth
                      select
                      variant="outlined"
                      sx={textFieldSx}
                    >
                      <MenuItem value="service1">خدمة 1</MenuItem>
                      <MenuItem value="service2">خدمة 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="right" gutterBottom>
                      الوصف
                    </Typography>
                    <TextField fullWidth variant="outlined" sx={textFieldSx} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="right" gutterBottom>
                      صور اختيارية:
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
                  إرسال
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} mt={5}>
            <Box
              textAlign="right"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                direction: "rtl",
              }}
            >
              <Typography variant="h4" gutterBottom>
                احجز مشروعك
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#7C7C7C" }}
              >
                لا تفوت الفرصة! احجز مشروعك معنا اليوم وابدأ في تحويل رؤيتك إلى
                واقع متكامل
              </Typography>
              <Divider sx={{ mb: 2, bgcolor: "#919191", height: "1px" }} />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexDirection="row-reverse"
                p={2}
              >
                <Stack
                  spacing={0.5}
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography
                    variant="h6"
                    width="100%"
                    fontWeight="bold"
                    textAlign="right"
                  >
                    الموقع
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <Typography variant="body2" color="text.secondary">
                      دبي برشا2 البناء 132 الطابق 4
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "black", width: 40, height: 40, ml: 2 }}>
                  <CallIcon sx={{ color: "white" }} />
                </Avatar>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flexDirection="row-reverse"
                p={2}
              >
                <Stack
                  spacing={0.5}
                  flexDirection="column"
                  alignItems="flex-end"
                >
                  <Typography
                    variant="h6"
                    width="100%"
                    fontWeight="bold"
                    textAlign="right"
                  >
                    اتصل بنا
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <Typography variant="body2" color="text.secondary">
                      +971 665 87 453 ( whats app )
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
                تابعنا وسائل الإعلام الاجتماعية لدينا:
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
                  {" "}
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
                  {" "}
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
                  {" "}
                  <LinkedInIcon sx={{ color: "white" }} />
                </Box>
              </Box>
            </Box>
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
            Call Us
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
            <Typography variant="h6">اتصل بنا للحصول على المشروع</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              اتصل بنا لتحديد موعد للتخطيط لمشروعك
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
