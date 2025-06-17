import { SectionFour } from "../components/SectionFour";
import { SectionThree } from "../components/SectionThree";
import { SectionTwo } from "../components/SectionTwo";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <>
      <Slider />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};
