import React from "react";
import { MainHeader } from "./MainHeader";
import { SectionOne } from "./About/SectionOne";
import { SectionTwo } from "./About/SectionTwo";
import { SectionThree } from "./About/SectionThree";
import { SectionFour } from "./About/SectionFour";

export const About = () => {
  return (
    <>
      <MainHeader text="من نحن" />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
