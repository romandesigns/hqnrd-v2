import { Content, SiteWrapper, Wrapper } from "@/components/site/components";
import { RoomsHeader } from "@/components/site/rooms";
import { SectionHeading } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function RoomsLayout(
  props: {
    params: Promise<{ lang: Locale }>;
    children: React.ReactNode;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const {
    children
  } = props;

  const {
    site: { component },
  } = await getDictionary(lang);

  const slugs: string[] = [
    ...Array.from(
      new Set(component.page.rooms.roomsList.map((room) => room.slug)),
    ),
  ];

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
            headingDividerClassName="my-0"
            title={"Explore our rooms and choose your perfect stay"}
          />
          <Wrapper>
            <Content contentClassName="grid w-full gap-4 pt-0 max-md:pt-2">
              {children}
            </Content>
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
