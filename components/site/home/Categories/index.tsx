import { CategoryCard, SectionHeading } from "@/components/ui";
import { CategoriesProps } from "@/types";
import { Content, Section } from "../../components";
import { dictionaryStrings } from "./translationStrings";
/**
 * @title Categories component
 * @description Home Categories component
 * @export
 * @param {{
 *   dictionary: CategoriesProps;
 * }} {
 *   dictionary,
 * }
 * @return {*}  {JSX.Element}
 */
export function Categories({
  dictionary,
}: {
  dictionary: CategoriesProps;
}): JSX.Element {
  const heading = dictionary.heading;
  const translations = dictionaryStrings(dictionary);

  return (
    <Section wrapperClassName="p-2 lg:p-4" sectionClassName="bg-red-500">
      <SectionHeading title={heading.title} subtitle={heading.subtitle} />
      <Content contentClassName="grid w-full grid-cols-3 grid-rows-2 items-center justify-center gap-10 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </Content>
    </Section>
  );
}
