import { CategoryCard, SectionHeading } from "@/components/ui";
import { Locale } from "@/i18n-config";
import { CategoriesProps } from "@/types";
import { Content, Section } from "../../components";
import { dictionaryStrings } from "./translationStrings";
import { BackgroundCategories } from "@/components/ui/Backgrounds/BackgroundCategories";

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
  lang,
}: {
  dictionary: CategoriesProps;
  lang: Locale;
}): JSX.Element {
  const { heading } = dictionary;
  const translations = dictionaryStrings(dictionary);

  return (
    <Section sectionClassName="relative">
      <BackgroundCategories />
      <SectionHeading
        title={heading.title}
        subtitle={heading.subtitle}
        headingClassName="!mb-10"
      />
      <Content contentClassName="grid w-full grid-cols-3 grid-rows-2 items-center justify-center gap-10 max-lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {translations.map((room) => (
          <CategoryCard
            btnText={room.btnText}
            title={room.title}
            description={room.description}
            slug={room.slug}
            key={room.slug}
            Icon={room.Icon}
            lang={lang}
          />
        ))}
      </Content>
    </Section>
  );
}
