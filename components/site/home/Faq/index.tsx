import { SectionHeading } from "@/components/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/types";
import { Section } from "../../components";
/**
 * @title Frequently Asked Questions
 * @description Home Frequently Asked Questions component
 * @export
 * @param {FAQ} { dictionary }
 * @return {*}  {JSX.Element}
 */
export function FrequentlyAskedQuestions({ dictionary }: FAQ): JSX.Element {
  return (
    <Section
      wrapperClassName="p-2 lg:p-4 max-w-6xl"
      sectionClassName="bg-zinc-500"
    >
      <SectionHeading
        title={dictionary.heading.title}
        subtitle={dictionary.heading.subtitle}
      />
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
    </Section>
  );
}
