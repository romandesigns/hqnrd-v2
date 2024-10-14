import { SiteWrapper } from "@/components/site/components/SiteWrapper";
import {
  Categories,
  Discounts,
  FrequentlyAskedQuestions,
  HomeHeader,
  Surrounding,
  Testimonials,
  Trending,
} from "@/components/site/home";
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
        footer: component.footer,
      }}
    >
      <div>
        <HomeHeader lang={lang} dictionary={component.page.home.header} />
        <main>
          <Testimonials dictionary={component.page.home.testimonials.heading} />
          <Discounts lang={lang} dictionary={component.page.home.discounts} />
          <Categories dictionary={component.page.home.categories} />
          <Surrounding dictionary={component.page.home.surrounding} />
          <Trending dictionary={component.page.home.trending} />
          <FrequentlyAskedQuestions dictionary={component.page.home.faq} />
        </main>
      </div>
    </SiteWrapper>
  );
}
