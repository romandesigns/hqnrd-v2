import { RoomCard, SectionHeading } from "@/components/ui";
import { data } from "@/public/assets/data";
import { Content, Section } from "../components";

export function TrendingRooms({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}): JSX.Element {
  return (
    <Section sectionClassName="!p-0 bg-white/80 dark:bg-black/15 mt-2 rounded-bl-md rounded-br-md">
      <SectionHeading title={title} subtitle={subtitle} />
      <Content contentClassName="mt-20  grid w-full grid-cols-3 grid-rows-1 gap-4 max-[1230px]:grid-cols-2 max-[1230px]:grid-rows-2 max-[804px]:grid-cols-1 max-[804px]:grid-rows-3 max-[804px]:gap-10 py-0">
        <RoomCard imgSrc={data.home.header.room[0]} />
        <RoomCard imgSrc={data.home.header.room[1]} />
        <RoomCard imgSrc={data.home.header.room[2]} />
      </Content>
    </Section>
  );
}
