import { CategoryCard, Divider, Heading } from "@/components/ui";
import { Wrapper } from "../../components";
import { dictionaryStrings } from "./translationStrings";

export interface Categories {
  heading: {
    title: string;
    subTitle: string;
  };
  rooms: {
    basics: RoomCategory;
    doubles: RoomCategory;
    standards: RoomCategory;
    double_beds: RoomCategory;
    family: RoomCategory;
    executives: RoomCategory;
  };
}

interface RoomCategory {
  btnText: string;
  title: string;
  description: string;
  slug: string;
}

export function Categories({ dictionary }: { dictionary: Categories }) {
  const heading = dictionary.heading;
  const translations = dictionaryStrings(dictionary);

  return (
    <section>
      <Wrapper className="!my-28 p-2 lg:p-4">
        <div className="mx-auto max-w-2xl">
          <Divider orientation="horizontal">
            <Heading title={heading.title} subTitle={heading.subTitle} />
          </Divider>
        </div>
        <div className="my-28 grid w-full grid-cols-3 grid-rows-2 items-center justify-center gap-10 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {translations.map((room) => (
            <CategoryCard
              btnText={room.btnText}
              title={room.title}
              description={room.description}
              slug={room.slug}
              key={room.slug}
              Icon={room.Icon}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
