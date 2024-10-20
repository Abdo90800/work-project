import { useTranslations } from "next-intl";
import Caro from "../component/Caro";
import Slider from "../component/Slider";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
<Caro/>
<Slider/>
    </div>
  );
}
