import { Button, ExternalLink, SectionHeading } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CONSTANTS } from "@/constants";
import { data } from "@/public/assets/data";
import { SurroundingProps } from "@/types";
import { Content, Section } from "../../components";
import { Gallery } from "./Gallery";
/**
 * @title Surrounding
 * @description Home Surrounding component
 * @export
 * @param {SurroundingProps} { dictionary }
 * @return {*}  {JSX.Element}
 */
export function Surrounding({ dictionary }: SurroundingProps): JSX.Element {
  return (
    <Section>
      <SectionHeading
        title={dictionary.heading.title}
        subtitle={dictionary.heading.subtitle}
      />
      <Content>
        <Tabs
          defaultValue="terraze"
          className="glass-effect grid grid-cols-[1fr_25%] grid-rows-1 gap-4 border p-4 max-md:grid-cols-1 max-md:grid-rows-[auto_auto]"
        >
          <div className="w-full rounded-md bg-background p-2 pt-0 max-md:order-2">
            <TabsContent value="terraze">
              <Gallery imagesArray={data.home.header.room} />
            </TabsContent>
            <TabsContent value="hallways">
              <Gallery imagesArray={data.home.header.room} />
            </TabsContent>
          </div>
          <div className="h-full max-md:order-1">
            <TabsList className="grid w-full grid-cols-2 gap-4 md:mb-10 md:h-full md:grid-cols-1 md:p-4">
              <TabsTrigger
                value="terraze"
                className="h-full gap-2 md:flex md:flex-col md:items-start md:justify-center md:p-4"
              >
                <h3 className="text-left text-2xl font-bold max-lg:text-xl max-md:text-sm max-md:font-medium">
                  {dictionary.cards.first_card.title}
                </h3>
                <p className="text-left text-xs max-lg:hidden">
                  {dictionary.cards.first_card.description}
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="hallways"
                className="h-full gap-2 md:flex md:flex-col md:items-start md:justify-center md:p-4"
              >
                <h3 className="text-left text-2xl font-bold max-lg:text-xl max-md:text-sm max-md:font-medium">
                  {dictionary.cards.second_card.title}
                </h3>
                <p className="text-left text-xs max-lg:hidden">
                  {dictionary.cards.second_card.description}
                </p>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        <div className="flex w-full flex-col items-center justify-center pt-16">
          <Button asChild className="w-1/4">
            <ExternalLink
              href={CONSTANTS.site.contact.whatsapp_chat}
              className="block w-full max-w-sm py-6"
            >
              {dictionary.cta.button}
            </ExternalLink>
          </Button>
        </div>
      </Content>
    </Section>
  );
}
