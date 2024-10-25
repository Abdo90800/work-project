import { useTranslations } from "next-intl";
import MainCards from "../component/MainCards";
import Frames from "../component/Frames";
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Frames />
      <MainCards />
    </div>
  );
}
