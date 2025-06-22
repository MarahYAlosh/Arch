import React from "react";

import { SectionOne } from "../components/About/SectionOne";
import { SectionTwo } from "../components/About/SectionTwo";
import { SectionThree } from "../components/About/SectionThree";
import { SectionFour } from "../components/About/SectionFour";
import { MainHeader } from "../components/MainHeader";
import { Header } from "../components/Header";

export const About = () => {
  return (
    <>
    <Header />
      <MainHeader text="من نحن" />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
