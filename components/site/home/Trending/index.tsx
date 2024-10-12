import { CardHeader, CardHeading, Divider, Heading } from "@/components/ui";
import { Wrapper } from "../../components";
import { data } from "@/public/assets/data";
import { CONSTANTS } from "@/constants";
import Image from "next/image";
export function Trending({
  lang,
  dictionary: {
    heading: { title, subTitle },
  },
}: {
  lang: string;
  dictionary: { heading: { title: string; subTitle: string } };
}) {
  return (
    <section>
      <Wrapper className="bg-neutral-500 p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading title={title} subTitle={subTitle} />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-3 grid-rows-1 gap-4">
          <div className="">
            <CardHeader highlight="#101" title="Double Bed" />
            <figure className="relative block aspect-video scale-[1.02]">
              <Image
                fill
                className="rounded-md object-cover"
                src={data.home.hero_gallery[0]}
                alt={CONSTANTS.site.site_name}
              />
            </figure>
            <div>
              <CardHeading />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
