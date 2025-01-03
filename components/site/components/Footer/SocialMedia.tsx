import { AiFillFacebook, ImInstagram } from "@/components/icons";
import { ExternalLink } from "@/components/ui";
import { CONSTANTS } from "@/constants";
import { SiteFooterProps } from "@/types";

export function SocialMedia({ dictionary }: SiteFooterProps) {
  return (
    <ul className="grid w-full grid-cols-1 grid-rows-[2rem_2rem_auto] pt-8 text-[0.7rem] text-white md:mt-0 [&_li_a]:hover:text-white">
      <li>
        <ExternalLink
          href={CONSTANTS.site.social_media.facebook}
          className="inline-flex items-start justify-start gap-3"
        >
          <AiFillFacebook />
          <span className="underline">Facebook</span>
        </ExternalLink>
      </li>
      <li>
        <ExternalLink
          href={CONSTANTS.site.social_media.instagram}
          className="inline-flex items-start justify-start gap-3"
        >
          <ImInstagram />
          <span className="underline">Instagram</span>
        </ExternalLink>
      </li>
      {/* Remove underline from the 3rd li */}
      <li className="pt-10 no-underline">
        <h3 className="text-xs font-semibold">{dictionary.mapHeading}</h3>
      </li>
      <li className="mt-4 h-52 w-full overflow-hidden rounded-md lg:w-3/4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.735731141567!2d-70.4231043!3d19.3805922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eae296e50e06303%3A0x4141e3bda5d73fec!2sHotel%20Quinto%20Nivel%20RD!5e0!3m2!1sen!2sus!4v1712705679198!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </li>
    </ul>
  );
}
