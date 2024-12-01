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
  params: Promise<{ unitNumber: string; lang: Locale }>;
}) {
  const params = await props.params;
  const { unitNumber, lang } = params;

  const {
    site: { component },
  } = await getDictionary(lang);

  const room = unitNumber
    ? component.page.rooms.roomsList.filter(
        (room) => room.unitNumber === unitNumber,
      )
    : component.page.rooms.roomsList;

  const roomCategory = room[0].title.replace(/Room|Habitacion/i, "").trim();

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
        <Header unitNumber={Number(unitNumber)} lang={lang} />
        <Gallery />
        <main className="p-2">
          <Wrapper className="mx-auto my-0 rounded-md !px-0 lg:py-8">
            <article className="items-strech flex justify-between gap-2">
              <div className="grid flex-[2] grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] gap-2 rounded-bl-md rounded-tl-md bg-card p-4 pb-6">
                <Toolbar data={data.site.shareData} />
                <Features />
                <Description />
                <Amenities />
                <Media />
              </div>
              <Aside roomPricePerNight={room[0].pricePerNight}>
                <ReservationForm
                  roomUnitNumber={Number(unitNumber)}
                  roomPricePerNight={Number(room[0].pricePerNight)}
                  roomCategory={roomCategory}
                />
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
