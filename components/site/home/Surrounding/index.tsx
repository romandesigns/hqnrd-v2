import { Divider, Heading } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { data } from "@/public/assets/data";
import { Wrapper } from "../../components";
import { Gallery } from "./Gallery";
export function Surrounding({
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
        <div className="mx-auto max-w-xl">
          <Divider orientation="horizontal">
            <Heading title={title} subTitle={subTitle} />
          </Divider>
        </div>
        <Tabs defaultValue="terraze" className="mb-28 mt-10">
          <TabsList className="mx-auto mb-10 grid w-full max-w-lg grid-cols-2">
            <TabsTrigger value="terraze">Terraze</TabsTrigger>
            <TabsTrigger value="hallways">Hallways</TabsTrigger>
          </TabsList>
          <TabsContent value="terraze">
            <Gallery imagesArray={data.home.hero_gallery} />
          </TabsContent>
          <TabsContent value="hallways">
            <Gallery imagesArray={data.home.hero_gallery} />
          </TabsContent>
        </Tabs>
      </Wrapper>
    </section>
  );
}
