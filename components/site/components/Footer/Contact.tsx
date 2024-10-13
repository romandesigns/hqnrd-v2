import {
  AiFillPhone,
  BiSolidTrafficCone,
  FaInternetExplorer,
  FaMapMarkerAlt,
  MdEmail,
} from "@/components/icons";
import { ExternalLink, ShareBtn } from "@/components/ui";
import { CONSTANTS } from "@/constants";
import { ShareDataPropTypes } from "@/types";

export const Contact = ({ siteSharableData }: ShareDataPropTypes) => {
  return (
    <ul className="my-10 w-full space-y-3 text-sm text-white [&_li_a]:hover:text-white">
      <li>
        <ExternalLink
          href={CONSTANTS.site.contact.whatsapp_chat}
          className="flex items-center justify-start gap-3"
        >
          <AiFillPhone />
          <span className="mr-2 text-[0.7rem] underline">+1809-753-7500</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={CONSTANTS.site.contact.admin_email_recipientes}
          className="flex items-center justify-start gap-3"
        >
          <>
            <MdEmail />
            <span className="mr-2 text-[0.7rem] underline">
              {CONSTANTS.site.contact.email}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="my-2 flex items-center justify-between md:justify-start md:space-x-10">
        <ExternalLink
          href={CONSTANTS.site.contact.domain}
          className="flex items-center justify-start gap-3"
        >
          <FaInternetExplorer />
          <span className="mr-2 text-[0.7rem] underline">
            {CONSTANTS.site.contact.domain}
          </span>
        </ExternalLink>
        <ShareBtn siteSharableData={siteSharableData} />
      </li>
      <li>
        <ExternalLink
          href={CONSTANTS.site.map_location}
          className="flex items-start justify-start gap-3"
        >
          <>
            <FaMapMarkerAlt />
            <span className="mr-2 text-left text-[0.7rem] underline">
              {CONSTANTS.site.address}
            </span>
          </>
        </ExternalLink>
      </li>
      <li className="block pt-10">
        <ExternalLink
          href="mailto:roman@wavystyle.io?cc=trfm1987@gmail.com&subject=HQNRD Support Request"
          className="inline-flex flex-col items-start justify-center rounded-md border p-3"
        >
          <>
            <span className="flex items-baseline justify-start gap-2">
              <BiSolidTrafficCone />
              <strong className="underlined flex items-center justify-start text-xs text-inherit">
                Report an Issue
              </strong>
            </span>
          </>
        </ExternalLink>
      </li>
    </ul>
  );
};
