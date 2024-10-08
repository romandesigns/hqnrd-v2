import React from "react";
import { Wrapper } from "../../components";
import { Carousel, Divider, Heading } from "@/components/ui";
import { reviews } from "@/components/ui/CardTestimonial/data";

export function Testimonials({ lang }: { lang: string }) {
  return (
    <section>
      <Wrapper className="p-2 !py-20 lg:p-4">
        <Divider orientation="horizontal">
          <Heading
            title="Don't only take our word for it"
            subTitle="See what our guests have to say about us!"
          />
        </Divider>
        <div className="grid grid-cols-3 gap-4">
          <Carousel
            arr={reviews}
            delay={3500}
            direction="horizontal"
            component="cardTestimonial"
          />
        </div>
      </Wrapper>
    </section>
  );
}
