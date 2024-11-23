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
    <Section>
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
      <div className="left-right absolute bottom-auto right-0 top-0 h-[60vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf35] opacity-50 blur-[80px] dark:bg-[#479dcf40]" />
    </Section>
  );
}
