import { Carousel, Divider, Heading } from "@/components/ui";
import { reviews } from "@/components/ui/CardTestimonial/data";
import { Wrapper } from "../../components";

export function Testimonials({ lang }: { lang: string }) {
  return (
    <section>
      <Wrapper className="p-2 !py-20 !pt-10 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading
              title="Don't only take our word for it"
              subTitle="See what our guests have to say about us!"
            />
          </Divider>
        </div>
        <div className="grid w-full gap-4">
          <Carousel
            arr={reviews}
            delay={3500}
            direction="horizontal"
            component="cardTestimonial"
            classNames="py-8 w-full"
            slidesPerView={3}
          />
        </div>
      </Wrapper>
    </section>
  );
}
