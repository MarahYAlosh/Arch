import React from "react";
import {
  containerStyle,
  serviceItemStyle,
  servicesContainerStyle,
  titleBoxStyle,
  titleStyle,
  titleWrapperStyle,
  underlineStyle,
} from "../styles/SectionTwoStyle";
import { Box, Typography } from "@mui/material";
import { teamMembers } from "../../utils/data";
import { motion } from "framer-motion";
import { MemberCard } from "../MemberCard";

export const SectionTwo = () => {
  const MotionBox = motion(Box);
  return (
    <Box sx={containerStyle}>
      <Box sx={titleWrapperStyle}>
        <Box sx={titleBoxStyle}>
          <Typography variant="h4" gutterBottom sx={titleStyle}>
            فريقنا
          </Typography>

          <Box sx={underlineStyle} />
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            p: 2,
            width: { xs: "90%", sm: "68%", md: "52%" },
          }}
        >
          نحن فريق من المهندسين المعماريين المبدعين والمتحمسين، نكرس جهودنا
          لتحقيق أحلام عملائنا من خلال تصميمات فريدة ومبتكرة، حيث ندمج بين الفن
          والوظيفة لنخلق مساحات تلبي تطلعاتهم وتعكس هويتهم
        </Typography>
      </Box>

      <Box sx={servicesContainerStyle}>
        {teamMembers.map((member, index) => (
          <MotionBox
            key={index}
            sx={serviceItemStyle}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <MemberCard member={member} />
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
};
