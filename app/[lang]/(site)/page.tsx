import { SiteWrapper } from "@/components/site/components/SiteWrapper";
import { HomeHeader, Testimonials } from "@/components/site/home";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  return (
    <SiteWrapper
      lang={lang}
      dictionary={{
        navigation: component.navigation,
        themeMenu: component.themeMenu,
      }}
    >
      <div>
        <HomeHeader lang={lang} />
        <main className="bg-neutral-300">
          <Testimonials lang={lang} />
        </main>
      </div>
    </SiteWrapper>
  );
}
