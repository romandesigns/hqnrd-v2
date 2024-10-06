import { FaEnvelope, PiMapPinFill, RiWhatsappFill } from "@/components/icons";
import { Button } from "..";
import { LanugageSwitcher } from "./LanguageSwitcher";

export function ContactWidget({ lang }: { lang: string }) {
  return (
    <ul className="flex items-center justify-center gap-3 py-4 lg:hidden">
      <li>
        <Button variant="outline" size="icon">
          <RiWhatsappFill className="size-5" />
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon">
          <PiMapPinFill className="size-5" />
        </Button>
      </li>
      <li>
        <LanugageSwitcher lang={lang} />
      </li>
      <li>
        <Button variant="outline" size="icon">
          <FaEnvelope className="size-5" />
        </Button>
      </li>
    </ul>
  );
}
