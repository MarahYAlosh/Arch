import React from "react";

import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import pic from "../../assets/images/about.jpg";
import pic2 from "../../assets/images/about2.jpg";
import SectionThreeStyles from "../styles/SectionThreeStyle";
export const SectionOne = () => {
  return (
    <Box sx={SectionThreeStyles.root}>
      <Grid container sx={SectionThreeStyles.gridContainer}>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          sx={SectionThreeStyles.imageSection}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              mt: 8,
            }}
          >
            <Box
              component="img"
              src={pic}
              alt="pic1"
              sx={{
                width: { xs: "70%", sm: "77%", md: "50%" },
                alignSelf: "center",
                mr: { xs: "1rem", sm: "2rem", md: "3rem" },
              }}
            />
            <Box
              component="img"
              src={pic2}
              alt="pic2"
              sx={{
                width: { xs: "70%", sm: "80%", md: "55%" },
                alignSelf: "center",
                ml: { xs: "1rem", sm: "2rem", md: "3rem" },
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          sx={SectionThreeStyles.textSection}
        >
          <Typography variant="h4" gutterBottom sx={SectionThreeStyles.heading}>
            صمم حلمك في ثلاث خطوات بسيطة
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            نحن فريق من المهندسين المعماريين المبدعين والمتحمسين، نسعى جاهدين
            لتحقيق أحلام عملائنا من خلال تصميمات فريدة ومبتكرة. يجمع فريقنا بين
            الخبرة الواسعة والمعرفة العميقة بأحدث اتجاهات العمارة، مما يمكننا من
            تقديم حلول تصميم متكاملة تلبي احتياجات كل مشروع
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            نؤمن بأن العمارة ليست مجرد بناء، بل هي تعبير عن الفن والوظيفة. نسعى
            لإنشاء مساحات تعكس هوية عملائنا وتلبي تطلعاتهم، مع التركيز على
            الجمال والراحة
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            نحن نؤمن بالابتكار، الجودة، والتعاون. نعمل جنبًا إلى جنب مع عملائنا
            لضمان تحقيق رؤيتهم، ونسعى دائماً لتقديم أفضل الحلول المعمارية. إذا
            كنت تبحث عن شريك موثوق لتحقيق حلمك المعماري، فلا تتردد في الاتصال
            بنا
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            تسعى العمارة الحديثة إلى تحقيق الاستدامة من خلال استخدام تقنيات
            صديقة للبيئة وتوفير الطاقة، مما يقلل من التأثير السلبي على البيئة
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={SectionThreeStyles.paragraph}
          >
            تسعى العمارة الحديثة إلى تحقيق الاستدامة من خلال استخدام تقنيات
            صديقة للبيئة وتوفير الطاقة، مما يقلل من التأثير السلبي على البيئة
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
