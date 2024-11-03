import { useTranslations } from "next-intl";
import MainCards from "../component/MainCards";
import Frames from "../component/Frames";
import Caro from "../component/Caro";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import OurPartners from "../component/OurPartners";
import SliderCard from "../component/SliderCard";

export default function HomePage() {
  return (
    <div>
      {/* <Caro /> */}
      <Slider />
      <Banner />
      <SliderCard/>
      <OurPartners />
      <SliderCard />
      <Frames />
      <MainCards />
     
     
    </div>
  );
}
