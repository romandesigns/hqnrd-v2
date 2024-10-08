import React from "react";
import { Wrapper } from "../../components";
import { Divider, Heading } from "@/components/ui";

export function Testimonials({ lang }: { lang: string }) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <Divider orientation="horizontal">
          <Heading
            title="Don't only take our word for it"
            subTitle="See what our guests have to say about us!"
          />
        </Divider>
      </Wrapper>
    </section>
  );
}
