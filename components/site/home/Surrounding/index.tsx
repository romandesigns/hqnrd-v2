import { Carousel, Divider, Heading } from "@/components/ui";
import { Wrapper } from "../../components";
import { data } from "@/public/assets/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs defaultValue="account" className="">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="terraze">Terraze</TabsTrigger>
            <TabsTrigger value="hallways">Hallways</TabsTrigger>
          </TabsList>
          <TabsContent value="terraze">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <figure className="row-span-full aspect-square rounded-md border border-red-600">
                Terraze
              </figure>
              <figure className="h-full rounded-md border border-blue-600">
                Terraze
              </figure>
              <figure className="h-full rounded-md border border-green-600">
                Terraze
              </figure>
            </div>
          </TabsContent>
          <TabsContent value="hallways">
            <div className="my-28 grid w-full gap-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <figure className="row-span-full aspect-square rounded-md border border-red-600">
                  Terraze
                </figure>
                <figure className="h-full rounded-md border border-blue-600">
                  Terraze
                </figure>
                <figure className="h-full rounded-md border border-green-600">
                  Terraze
                </figure>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Wrapper>
    </section>
  );
}
