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
    <Section sectionClassName="relative">
      <SectionHeading title={dictionary.title} subtitle={dictionary.subtitle} />
      <Content contentClassName="relative grid w-full gap-4">
        <Carousel
          arr={data.home.testimonials}
          delay={3500}
          direction="horizontal"
          component="cardTestimonial"
          classNames="py-8 w-full"
          slidesPerView={3}
        />
      </Content>
      <div className="left-right absolute bottom-auto right-0 top-1/4 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bf973310] opacity-50 blur-[80px]" />
    </Section>
  );
}
