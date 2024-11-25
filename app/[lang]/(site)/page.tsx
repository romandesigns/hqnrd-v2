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
import { BackgroundHeader } from "@/components/ui/Backgrounds/BackgroundHeader";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

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
        <HomeHeader lang={lang} dictionary={component.page.home.header} />
        <BackgroundHeader />
        <main>
          <Testimonials dictionary={component.page.home.testimonials.heading} />
          <Discounts lang={lang} dictionary={component.page.home.discounts} />
          <Categories lang={lang} dictionary={component.page.home.categories} />
          <Surrounding dictionary={component.page.home.surrounding} />
          <Trending dictionary={component.page.home.trending} />
          <FrequentlyAskedQuestions dictionary={component.page.home.faq} />
        </main>
      </>
    </SiteWrapper>
  );
}
