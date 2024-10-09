import {
  Button,
  Carousel,
  DiscountCard,
  Divider,
  Heading,
} from "@/components/ui";
import { Wrapper } from "../../components";
import Link from "next/link";

export function Discounts({ lang }: { lang: string }) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading
              title="Discounts Available"
              subTitle="Stay longer by Spending Less"
            />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-2 items-center justify-center gap-8 max-lg:grid-cols-1">
          <DiscountCard
            percentage={5}
            ctaText="Applicable when booking 5 days!"
            imageSrc="/assets/images/home/20221015_151139.jpg"
          />
          <DiscountCard
            percentage={8}
            ctaText="Applicable when booking 15 days!"
            imageSrc="/assets/images/home/20221015_151139.jpg"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className="mb-4 text-xs font-medium opacity-75">
            Take control and make your own reservation!
          </p>
          <Button asChild className="w-1/4">
            <Link href={`/${lang}/habitaciones`} className="block py-6">
              Get Started
            </Link>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
