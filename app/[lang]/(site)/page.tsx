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
        <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
          <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3340] opacity-50 blur-[80px]" />
          <div className="left-right absolute bottom-auto right-0 top-0 h-[60vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf60] opacity-50 blur-[80px]" />
        </div>
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
