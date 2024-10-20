import { Content, SiteWrapper, Wrapper } from "@/components/site/components";
import { dictionaryStrings } from "@/components/site/home/Categories/translationStrings";
import { RoomsHeader } from "@/components/site/rooms";
import { SectionHeading } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Slugs } from "@/types";

export default async function RoomsLayout({
  params: { lang },
  children,
}: {
  params: { lang: Locale };
  children: React.ReactNode;
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  const slugs: Slugs[] = [];
  dictionaryStrings(component.page.home.categories).map((category) =>
    slugs.push({ slug: category.slug, label: category.title }),
  );

  const rooms = Array.from({ length: 13 }, (_, i) => i + 1);

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
            <Content contentClassName="grid w-full gap-4">{children}</Content>
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
