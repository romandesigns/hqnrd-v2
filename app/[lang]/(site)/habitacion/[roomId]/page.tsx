import {
  Amenities,
  Description,
  Features,
  Gallery,
  Header,
  ReservationForm,
} from "@/components/site/Room";
import { SiteWrapper, Wrapper } from "@/components/site/components";
import { ShareBtn } from "@/components/ui";
import { GoBack } from "@/components/ui/GoBack";

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
              <div className="flex-[2] rounded-md bg-white/80 p-4 dark:bg-black/15">
                <div className="flex w-full items-center justify-between py-4">
                  <GoBack className="mx-0" />
                  <ShareBtn
                    metadata={data.site.shareData}
                    className="mx-0 border bg-transparent"
                  />
                </div>
                <Features />
                <Description />
                <Amenities />
              </div>
              <div className="flex-[.9] bg-white/80 p-4 dark:bg-black/15">
                <div className="flex items-center justify-between border-b">
                  <p className="font-black uppercase">Reservation</p>
                  <p className="flex items-center justify-center gap-2 rounded-tl-md rounded-tr-md bg-foreground p-2 px-4 uppercase text-background">
                    <span className="font-black">1,350</span>/
                    <span className="font-medium">Night</span>
                  </p>
                </div>
                <ReservationForm />
              </div>
            </article>
            <article className="mt-2 flex items-stretch justify-stretch bg-white/80 p-4 dark:bg-black/15">
              <div className="aspect-square flex-1 bg-pink-500">Layout</div>
              <div className="aspect-video flex-1 bg-pink-500">Video</div>
            </article>
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
