import { Carousel, Divider, Heading } from "@/components/ui";
import { data } from "@/public/assets/data";
import { Wrapper } from "../../components";
import { TestimonialsProps } from "@/types";

export function Testimonials({ dictionary }: TestimonialsProps) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading title={dictionary.title} subtitle={dictionary.subtitle} />
          </Divider>
        </div>
        <div className="my-28 grid w-full gap-4">
          <Carousel
            arr={data.home.testimonials}
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
