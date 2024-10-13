import { Button, DiscountCard, Divider, Heading } from "@/components/ui";
import Link from "next/link";
import { Wrapper } from "../../components";
import { DiscountCardProps } from "@/types";

export function Discounts({
  lang,
  dictionary: {
    heading: { title, subTitle },
    cards: { card_left, card_right },
    cta: { ctaText, buttonTxt },
  },
}: DiscountCardProps) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading title={title} subTitle={subTitle} />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-2 items-center justify-center gap-8 max-lg:grid-cols-1">
          <DiscountCard
            percentage={5}
            title={card_left.title}
            ctaText={card_left.description}
            imageSrc="/assets/images/home/20221015_151139.jpg"
          />
          <DiscountCard
            title={card_right.title}
            ctaText={card_right.description}
            percentage={8}
            imageSrc="/assets/images/home/20221015_151139.jpg"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="mb-4 text-center text-xs font-medium opacity-85">
            {ctaText}
          </p>
          <Button asChild>
            <Link
              href={`/${lang}/habitaciones`}
              className="block w-full max-w-sm py-6"
            >
              {buttonTxt}
            </Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
