import { FcGoogle, PiMapPinFill } from "@/components/icons";
import {
  Button,
  ContactWidget,
  ExternalLink,
  StarRating,
  TextHighlight,
} from "@/components/ui";
import BoxReveal from "@/components/ui/box-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import { CONSTANTS } from "@/constants";
import { useHtmlParser } from "@/lib/utils";
import { HomeHeaderCopyProps } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

/**
 * CopyWritting Header Component
 * It is used to wrap components with the Brand component.
 * @param lang - Language of the website.
 * @param dictionary - HomeHeaderCopyProps object.
 * @returns CopyWritting component with title, review, highlight, and buttons.
 **/

export function CopyWritting({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: HomeHeaderCopyProps;
}) {
  return (
    <div className="flex flex-col items-start justify-start gap-4 max-lg:items-center max-lg:justify-center">
      <div className="mb-4 flex flex-col max-lg:py-2 max-lg:text-center">
        <div className="flex items-center justify-start gap-2 max-lg:justify-center">
          <p className="flex items-center justify-start gap-2 font-bold">
            <FcGoogle />
            <NumberTicker value={4.5} decimalPlaces={2} />
          </p>
          <StarRating rating={4.5} classNames="pt-1" />
        </div>
        <small className="max-lg:text-xs max-lg:font-medium">
          <NumberTicker value={139} delay={2} /> Google {dictionary.review}
        </small>
      </div>
      <div className="flex items-center justify-start gap-2 text-sm font-medium max-lg:justify-center">
        <PiMapPinFill className="text-primary-highlight animate-bounce" />
        <p>{dictionary.highlight}</p>
      </div>
      <BoxReveal boxColor={"black"} duration={0.25}>
        <h1
          className={twMerge(
            `text-5xl font-extrabold max-lg:text-center max-lg:text-3xl`,
            classNames({
              "text-4xl": lang === "es",
            }),
          )}
        >
          {dictionary.title}
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"black"} duration={0.5}>
        <p className="my-4 text-sm leading-relaxed max-lg:px-4 max-lg:text-center max-lg:text-xs">
          {useHtmlParser(dictionary.complementaryText)}
          <TextHighlight
            {...{
              elId: "myEl",
              text: dictionary.cta,
              highlightType: "underline",
              color: "black",
              delay: 3000,
              className: "font-bold inline-block ml-1",
            }}
          />
        </p>
      </BoxReveal>
      <div className="flex gap-4 max-lg:justify-center">
        <Button asChild>
          <Link href={`/${lang}/habitaciones`}>{dictionary.buttonLeft}</Link>
        </Button>
        <Button variant="outline" asChild>
          <ExternalLink href={CONSTANTS.site.contact.whatsapp_chat}>
            {dictionary.buttonRight}
          </ExternalLink>
        </Button>
      </div>
      <div className="max-lg:hidden lg:pt-12">
        <ContactWidget
          lang={lang}
          className="w-full lg:flex lg:justify-start"
        />
      </div>
    </div>
  );
}
