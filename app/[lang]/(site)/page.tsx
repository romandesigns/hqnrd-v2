import { SiteWrapper } from "@/components/site/components/SiteWrapper";
import { HomeHeader } from "@/components/site/home";
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
        <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
          <p>Home Page</p>
        </main>
      </div>
    </SiteWrapper>
  );
}
