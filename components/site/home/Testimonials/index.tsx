import { Carousel, Divider, Heading } from "@/components/ui";
import { Wrapper } from "../../components";
import { data } from "@/public/assets/data";

export function Testimonials({
  dictionary: {
    heading: { title, subTitle },
  },
}: {
  lang: string;
  dictionary: { heading: { title: string; subTitle: string } };
}) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading title={title} subTitle={subTitle} />
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
