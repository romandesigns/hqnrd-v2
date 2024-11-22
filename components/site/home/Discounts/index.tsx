import {
  BackgroundEffect,
  Button,
  DiscountCard,
  SectionHeading,
} from "@/components/ui";
import { DiscountCardProps } from "@/types";
import Link from "next/link";
import { Content, Section } from "../../components";

export function Discounts({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: DiscountCardProps;
}) {
  return (
    <Section sectionClassName="relative">
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
        <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3360] opacity-25 blur-[80px] dark:-left-[20rem] dark:w-[70vw] dark:bg-[#bfb63350] dark:opacity-15 dark:blur-[300px]" />
        <div className="left-right absolute bottom-auto right-0 top-0 h-[70vh] w-[60vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf60] opacity-50 blur-[80px] dark:bg-[#479dcf10]" />
      </div>
      <SectionHeading
        title={dictionary.heading.title}
        subtitle={dictionary.heading.subtitle}
      />
      <Content contentClassName="grid w-full grid-cols-2 items-center justify-center gap-8 max-lg:grid-cols-1">
        <DiscountCard
          percentage={5}
          title={dictionary.cards.first_discount.title}
          ctaText={dictionary.cards.first_discount.description}
          imageSrc="/assets/images/home/20221015_151139.jpg"
        />
        <DiscountCard
          title={dictionary.cards.second_discount.title}
          ctaText={dictionary.cards.second_discount.description}
          percentage={8}
          imageSrc="/assets/images/home/20221015_151139.jpg"
        />
      </Content>
      <div className="flex w-full flex-col items-center justify-center pt-16">
        <p className="mb-4 text-center text-xs font-medium opacity-85">
          {dictionary.cta.text}
        </p>
        <Button asChild>
          <Link
            href={`/${lang}/habitaciones`}
            className="block w-full max-w-sm py-6"
          >
            {dictionary.cta.button}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
