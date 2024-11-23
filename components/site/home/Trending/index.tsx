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
    <Section sectionClassName="relative">
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
        <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3360] opacity-25 blur-[80px] dark:-left-[20rem] dark:w-[70vw] dark:bg-[#bfb63350] dark:opacity-15 dark:blur-[300px]" />
        <div className="left-right absolute bottom-auto right-0 top-0 h-[90vh] w-[60vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf60] opacity-50 blur-[80px] dark:bg-[#479dcf10]" />
      </div>
      <div className="rounded-lg p-4">
        <SectionHeading
          title={dictionary.heading.title}
          subtitle={dictionary.heading.subtitle}
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
