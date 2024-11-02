import { useTranslations } from "next-intl";
import MainCards from "../component/MainCards";
import Frames from "../component/Frames";
import OurPartners from "../component/OurPartners";
import SliderCard from "../component/SliderCard";
import ContactUs from "../component/ContactUs";
// import BlogDetails from "../component/BlogDetails"
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      {/* <BlogDetails/> */}
      <ContactUs />
      <OurPartners />
      <SliderCard />
      <Frames />
      <MainCards />
    </div>
  );
}
