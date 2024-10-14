import { Divider, Heading } from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/types";
import { Wrapper } from "../../components";

export function FrequentlyAskedQuestions({ dictionary }: FAQ) {
  return (
    <section className="py-20">
      <Wrapper className="max-w-6xl p-4">
        <div className="mx-auto max-w-xl">
          <Divider orientation="horizontal">
            <Heading
              title={dictionary.heading.title}
              subtitle={dictionary.heading.subtitle}
            />
          </Divider>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {dictionary.questions.map(({ id, question, answer }) => (
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
