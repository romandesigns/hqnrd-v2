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
          <Testimonials
            lang={lang}
            dictionary={{
              heading: component.page.home.testimonials.heading,
            }}
          />
          <Discounts
            lang={lang}
            dictionary={{
              heading: component.page.home.discounts.heading,
              cards: {
                card_left: component.page.home.discounts.first_discount,
                card_right: component.page.home.discounts.second_discount,
              },
              cta: {
                ctaText: component.page.home.discounts.cta.text,
                buttonTxt: component.page.home.discounts.cta.button,
              },
            }}
          />
        </main>
      </div>
    </SiteWrapper>
  );
}
