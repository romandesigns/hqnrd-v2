import { Divider, Heading, RoomCard } from "@/components/ui";
import { data } from "@/public/assets/data";
import { TrendingProps } from "@/types";
import { Wrapper } from "../../components";

export function Trending({ dictionary }: TrendingProps) {
  return (
    <section>
      <Wrapper className="p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading
              title={dictionary.heading.title}
              subtitle={dictionary.heading.subtitle}
            />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-3 grid-rows-1 gap-4 max-[1230px]:grid-cols-2 max-[1230px]:grid-rows-2 max-[804px]:grid-cols-1 max-[804px]:grid-rows-3 max-[804px]:gap-10">
          <RoomCard imgSrc={data.home.hero_gallery[0]} />
          <RoomCard imgSrc={data.home.hero_gallery[1]} />
          <RoomCard imgSrc={data.home.hero_gallery[2]} />
        </div>
      </Wrapper>
    </section>
  );
}
