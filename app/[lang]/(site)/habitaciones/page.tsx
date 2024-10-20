import { Content, SiteWrapper, Wrapper } from "@/components/site/components";
import { dictionaryStrings } from "@/components/site/home/Categories/translationStrings";
import { RoomsHeader } from "@/components/site/rooms";
import { RoomCard, SectionHeading } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { data } from "@/public/assets/data";
import { Slugs } from "@/types";

export default async function Rooms({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  const slugs: Slugs[] = [];
  dictionaryStrings(component.page.home.categories).map((category) =>
    slugs.push({ slug: category.slug, label: category.title }),
  );

  const rooms = Array.from({ length: 13 }, (_, i) => i + 1);
  console.log(component.page.rooms.roomsList);
  return (
    <SiteWrapper
      showFooter
      showNavigation
      lang={lang}
      dictionary={{
        navigation: component.navigation,
        themeMenu: component.themeMenu,
        footer: component.footer,
      }}
    >
      <>
        <RoomsHeader
          rooms={rooms}
          lang={lang}
          slugs={slugs}
          dictionary={{ ...component.page.rooms, ...component.ui.cta }}
        />
        <main>
          <SectionHeading
            title={"Explore our rooms and choose your perfect stay"}
          />
          <Wrapper>
            <Content contentClassName="grid w-full gap-4">
              <ul className="grid grid-flow-row grid-cols-1 grid-rows-4 gap-4 gap-y-10 rounded-md p-2 sm:grid-cols-2 lg:grid-cols-3">
                {component.page.rooms.roomsList.map((room) => (
                  <li key={room.id}>
                    <RoomCard imgSrc={data.home.header.room[0]} {...room} />
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
