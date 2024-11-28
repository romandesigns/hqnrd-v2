import { Content, SiteWrapper, Wrapper } from "@/components/site/components";
import { RoomsHeader } from "@/components/site/rooms";
import { SectionHeading } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function RoomsLayout(props: {
  params: Promise<{ lang: Locale }>;
  children: React.ReactNode;
}) {
  const params = await props.params;

  const { lang } = params;

  const { children } = props;

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
        <div className="absolute left-0 right-0 top-0 -z-[14] bg-transparent">
          <div className="h-full w-full backdrop-blur-lg">
            <div className="absolute top-0 z-[-2] h-[100%] w-[100%] bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,hsla(201,97%,21%,0.40)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
            <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3320] opacity-20 blur-[80px] dark:-left-[20rem] dark:w-[70vw] dark:bg-[#bfb63350] dark:opacity-15 dark:blur-[300px]" />
            <div className="left-right absolute bottom-auto right-0 top-0 -z-[20] h-[60vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf60] opacity-50 blur-[80px] dark:bg-[#479dcf10]" />
          </div>
        </div>
        <main className="inset-shadow-md bg-background py-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
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
