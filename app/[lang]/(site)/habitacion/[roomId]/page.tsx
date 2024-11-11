import {
  Amenities,
  Aside,
  Description,
  Features,
  Gallery,
  Header,
  Media,
  ReservationForm,
  Toolbar,
  TrendingRooms,
} from "@/components/site/Room";
import { SiteWrapper, Wrapper } from "@/components/site/components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { data } from "@/public/assets/data";

export default async function Page(props: {
  params: Promise<{ roomId: string; lang: Locale }>;
}) {
  const params = await props.params;
  const { roomId, lang } = params;

  const {
    site: { component },
  } = await getDictionary(lang);
  console.log();
  return (
    <SiteWrapper
      lang={lang}
      showFooter
      showNavigation
      dictionary={{
        navigation: component.navigation,
        themeMenu: component.themeMenu,
        footer: component.footer,
      }}
    >
      <>
        <Header roomId={roomId} lang={lang} />
        <Gallery />
        <main className="p-2">
          <Wrapper className="mx-auto my-0 rounded-md !px-0 lg:py-8">
            <article className="items-strech flex justify-between gap-2">
              <div className="grid flex-[2] grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] gap-2 rounded-md bg-white/80 p-4 dark:bg-black/15">
                <Toolbar data={data.site.shareData} />
                <Features />
                <Description />
                <Amenities />
                <Media />
              </div>
              <Aside>
                <ReservationForm />
              </Aside>
            </article>
            <TrendingRooms
              title={component.page.home.trending.heading.title}
              subtitle={component.page.home.trending.heading.subtitle}
            />
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
