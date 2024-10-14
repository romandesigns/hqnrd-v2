import { Carousel, SectionHeading } from "@/components/ui";
import { data } from "@/public/assets/data";
import { TestimonialsProps } from "@/types";
import { Content, Section } from "../../components";
/**
 * @title Testimonials
 * @description Home testimonail  component
 * @export
 * @param {TestimonialsProps} { dictionary }
 * @return {*}  {JSX.Element}
 */
export function Testimonials({ dictionary }: TestimonialsProps): JSX.Element {
  return (
    <Section sectionClassName="bg-green-500">
      <SectionHeading title={dictionary.title} subtitle={dictionary.subtitle} />
      <Content contentClassName="grid w-full gap-4">
        <Carousel
          arr={data.home.testimonials}
          delay={3500}
          direction="horizontal"
          component="cardTestimonial"
          classNames="py-8 w-full"
          slidesPerView={3}
        />
      </Content>
    </Section>
  );
}
