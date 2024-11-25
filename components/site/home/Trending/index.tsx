import { RoomCard, SectionHeading } from "@/components/ui";
import { BackgroundTrendings } from "@/components/ui/Backgrounds/BackgroundTrendings";
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
    <Section sectionClassName="relative">
      <BackgroundTrendings />
      <div className="rounded-lg p-4">
        <SectionHeading
          title={dictionary.heading.title}
          subtitle={dictionary.heading.subtitle}
          headingClassName="!mb-8"
        />
        <Content contentClassName="grid w-full grid-cols-3 grid-rows-1 gap-4 max-[1230px]:grid-cols-2 max-[1230px]:grid-rows-2 max-[804px]:grid-cols-1 max-[804px]:grid-rows-3 max-[804px]:gap-10">
          <RoomCard imgSrc={data.home.header.room[0]} />
          <RoomCard imgSrc={data.home.header.room[1]} />
          <RoomCard imgSrc={data.home.header.room[2]} />
        </Content>
      </div>
    </Section>
  );
}
