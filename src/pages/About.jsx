import React from "react";

import { SectionOne } from "../components/About/SectionOne";
import { SectionTwo } from "../components/About/SectionTwo";
import { SectionThree } from "../components/About/SectionThree";
import { SectionFour } from "../components/About/SectionFour";
import { MainHeader } from "../components/MainHeader";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <MainHeader text={t("NavbarAboutUs")} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
