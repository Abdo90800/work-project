import { useTranslations } from "next-intl";
import Caro from "../component/Caro";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import SliderCard from "../component/SliderCard";


export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Caro />
      <Slider />
      <Banner />
      <SliderCard/>
      
    </div>
  );
}
