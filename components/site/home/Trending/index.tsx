import { RoomCard, SectionHeading } from "@/components/ui";
import { data } from "@/public/assets/data";
import { TrendingProps } from "@/types";
import { Content, Section } from "../../components";
/**
 *
 * @title Trending
 * @description Hone Trending component
 * @export
 * @param {TrendingProps} { dictionary }
 * @return {*} {JSX.Element}
 */
export function Trending({ dictionary }: TrendingProps): JSX.Element {
  return (
    <Section>
      <SectionHeading
        title={dictionary.heading.title}
        subtitle={dictionary.heading.subtitle}
      />
      <Content contentClassName="grid w-full grid-cols-3 grid-rows-1 gap-4 max-[1230px]:grid-cols-2 max-[1230px]:grid-rows-2 max-[804px]:grid-cols-1 max-[804px]:grid-rows-3 max-[804px]:gap-10">
        <RoomCard imgSrc={data.home.hero_gallery[0]} />
        <RoomCard imgSrc={data.home.hero_gallery[1]} />
        <RoomCard imgSrc={data.home.hero_gallery[2]} />
      </Content>
    </Section>
  );
}
