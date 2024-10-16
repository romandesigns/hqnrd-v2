import { Content, SiteWrapper, Wrapper } from "@/components/site/components";
import { dictionaryStrings } from "@/components/site/home/Categories/translationStrings";
import { RoomsHeader } from "@/components/site/rooms";
import { RoomCard, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { data } from "@/public/assets/data";
import { RoomsHeaderProps } from "@/types";

export default async function Rooms({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  const slugs: RoomsHeaderProps[] = [];
  dictionaryStrings(component.page.home.categories).map((category) =>
    slugs.push({ slug: category.slug, label: category.title }),
  );

  return (
    <SiteWrapper
      lang={lang}
      dictionary={{
        navigation: component.navigation,
        themeMenu: component.themeMenu,
        footer: component.footer,
      }}
    >
      <>
        <RoomsHeader
          lang={lang}
          slugs={slugs}
          dictionary={component.page.rooms}
        />
        <main>
          <SectionHeading
            title={"Explore our rooms and choose your perfect stay"}
          />
          <Wrapper>
            <Content contentClassName="grid w-full gap-4">
              <ul className="grid grid-flow-row grid-cols-3 grid-rows-4 gap-4 gap-y-10 rounded-md">
                {Array.from({ length: 13 }, (_, i) => (
                  <li key={i}>
                    <RoomCard imgSrc={data.home.header.room[0]} />
                  </li>
                ))}
              </ul>
            </Content>
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
