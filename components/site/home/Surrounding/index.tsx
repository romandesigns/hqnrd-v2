import { Button, Divider, ExternalLink, Heading } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CONSTANTS } from "@/constants";
import { data } from "@/public/assets/data";
import { Wrapper } from "../../components";
import { Gallery } from "./Gallery";
import { SurroundingProps } from "@/types";

export function Surrounding({
  dictionary: {
    heading: { title, subTitle },
    cta: { buttonTxt },
  },
}: {
  dictionary: SurroundingProps;
}) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-xl">
          <Divider orientation="horizontal">
            <Heading title={title} subTitle={subTitle} />
          </Divider>
        </div>
        <Tabs
          defaultValue="terraze"
          className="glass-effect mb-28 mt-10 grid grid-cols-[1fr_25%] grid-rows-1 gap-4 border p-4 max-md:grid-cols-1 max-md:grid-rows-[auto_auto]"
        >
          <div className="w-full rounded-md bg-background p-2 pt-0 max-md:order-2">
            <TabsContent value="terraze">
              <Gallery imagesArray={data.home.hero_gallery} />
            </TabsContent>
            <TabsContent value="hallways">
              <Gallery imagesArray={data.home.hero_gallery} />
            </TabsContent>
          </div>
          <div className="h-full max-md:order-1">
            <TabsList className="grid w-full grid-cols-2 gap-4 md:mb-10 md:h-full md:grid-cols-1 md:p-4">
              <TabsTrigger
                value="terraze"
                className="h-full gap-2 md:flex md:flex-col md:items-start md:justify-center md:p-4"
              >
                <h3 className="text-left text-2xl font-bold max-lg:text-xl max-md:text-sm max-md:font-medium">
                  Terraze
                </h3>
                <p className="text-left text-xs max-lg:hidden">
                  Available for our guests entertainment and private events.
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="hallways"
                className="h-full gap-2 md:flex md:flex-col md:items-start md:justify-center md:p-4"
              >
                <h3 className="text-left text-2xl font-bold max-lg:text-xl max-md:text-sm max-md:font-medium">
                  Common Areas
                </h3>
                <p className="text-left text-xs max-lg:hidden">
                  Offering you top best quality of cleanliness and peacefulness
                  all around.
                </p>
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        <div className="flex w-full flex-col items-center justify-center">
          <Button asChild className="w-1/4">
            <ExternalLink
              href={CONSTANTS.site.contact.whatsapp_chat}
              className="block py-6"
            >
              {buttonTxt}
            </ExternalLink>
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
