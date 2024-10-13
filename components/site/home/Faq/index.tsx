import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Wrapper } from "../../components";
import { FAQ } from "@/types";
import { Divider, Heading } from "@/components/ui";

export function FrequentlyAskedQuestions({ dictionary }: { dictionary: FAQ }) {
  const { heading, questions } = dictionary.faq;
  return (
    <section className="py-20">
      <Wrapper className="max-w-6xl p-4">
        <div className="mx-auto max-w-xl">
          <Divider orientation="horizontal">
            <Heading title={heading.title} subTitle={heading.subTitle} />
          </Divider>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>
                <p className="sm:text-md text-left text-xs">{question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="sm:text-md text-left text-xs">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Wrapper>
    </section>
  );
}
