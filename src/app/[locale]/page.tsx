import { useTranslations } from "next-intl";
import CardSwipper from "../component/MainCards"
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <CardSwipper/>
     
    </div>
  );
}
