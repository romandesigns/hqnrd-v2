import {
  AiFillPhone,
  BiSolidTrafficCone,
  FaInternetExplorer,
  FaMapMarkerAlt,
  MdEmail,
} from "@/components/icons";
import { ExternalLink, ShareBtn } from "@/components/ui";
import { CONSTANTS } from "@/constants";
import { SiteFooterProps, SiteMetaData } from "@/types";

export const Contact = ({
  metadata: { metadata },
  dictionary: { dictionary },
}: {
  metadata: SiteMetaData;
  dictionary: SiteFooterProps;
}) => {
  return (
    <ul className="my-10 grid w-full grid-cols-1 grid-rows-[2rem_2rem_2rem_2rem] text-[0.7rem] text-white [&_li_a]:hover:text-white">
      <li>
        <ExternalLink
          href={CONSTANTS.site.contact.whatsapp_chat}
          className="inline-flex items-center justify-start gap-3 underline"
        >
          <AiFillPhone />
          <span>+1809-753-7500</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={CONSTANTS.site.contact.admin_email_recipientes}
          className="inline-flex items-center justify-start gap-3 underline"
        >
          <MdEmail />
          <span>{CONSTANTS.site.contact.email}</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={CONSTANTS.site.map_location}
          className="inline-flex items-start justify-start gap-3 underline"
        >
          <FaMapMarkerAlt />
          <span className="mr-2 underline">{CONSTANTS.site.address}</span>
        </ExternalLink>
      </li>
      <li className="my-2 inline-flex items-center justify-between underline md:justify-start md:space-x-10">
        <ExternalLink
          href={CONSTANTS.site.contact.domain}
          className="flex items-center justify-start gap-3"
        >
          <FaInternetExplorer />
          <span>{CONSTANTS.site.contact.domain}</span>
        </ExternalLink>
        <ShareBtn metadata={metadata} className="border" />
      </li>
      <li className="pt-10">
        <ExternalLink
          href="mailto:roman@wavystyle.io?cc=trfm1987@gmail.com&subject=HQNRD Support Request"
          className="inline-flex flex-col items-start justify-center rounded-md border p-3"
        >
          <>
            <span className="flex items-baseline justify-start gap-2">
              <BiSolidTrafficCone />
              <strong className="underlined flex items-center justify-start text-xs text-inherit">
                {dictionary.ctaText}
              </strong>
            </span>
          </>
        </ExternalLink>
      </li>
    </ul>
  );
};
