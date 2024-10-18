import { useTranslations } from "next-intl";
import Caro from "../component/Caro";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
<Caro/>
    </div>
  );
}
