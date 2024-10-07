import { FaEnvelope, PiMapPinFill, RiWhatsappFill } from "@/components/icons";
import { CONSTANTS } from "@/constants";
import { Button, ExternalLink } from "..";
import { LanugageSwitcher } from "./LanguageSwitcher";
import { clsx } from "@/utils/clsx";

export function ContactWidget({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        "flex items-center justify-center gap-3 py-4 lg:hidden",
        className,
      )}
    >
      <li>
        <Button variant="outline" size="icon">
          <ExternalLink href={CONSTANTS.site.contact.whatsapp_chat}>
            <RiWhatsappFill className="size-5" />
          </ExternalLink>
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon" asChild>
          <ExternalLink href={CONSTANTS.site.map_location}>
            <PiMapPinFill className="size-5" />
          </ExternalLink>
        </Button>
      </li>
      <li>
        <LanugageSwitcher lang={lang} />
      </li>
      <li>
        <Button variant="outline" size="icon" asChild>
          <ExternalLink href={CONSTANTS.site.contact.admin_email_recipientes}>
            <FaEnvelope className="size-5" />
          </ExternalLink>
        </Button>
      </li>
    </ul>
  );
}
