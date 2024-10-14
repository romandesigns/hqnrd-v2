import { Button, DiscountCard, Divider, Heading } from "@/components/ui";
import Link from "next/link";
import { Wrapper } from "../../components";
import { DiscountCardProps } from "@/types";

export function Discounts({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: DiscountCardProps;
}) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading
              title={dictionary.heading.title}
              subtitle={dictionary.heading.subtitle}
            />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-2 items-center justify-center gap-8 max-lg:grid-cols-1">
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
        </div>
        <div className="flex w-full flex-col items-center justify-center">
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
      </Wrapper>
    </section>
  );
}
