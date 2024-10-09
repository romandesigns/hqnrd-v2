import { SiteWrapper } from "@/components/site/components/SiteWrapper";
import { Discounts, HomeHeader, Testimonials } from "@/components/site/home";
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
        <main>
          <Testimonials lang={lang} />
          <Discounts lang={lang} />
        </main>
      </div>
    </SiteWrapper>
  );
}
