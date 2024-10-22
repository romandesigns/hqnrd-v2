import { SiteWrapper, Wrapper } from "@/components/site/components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { roomId, lang },
}: {
  params: { roomId: string; lang: Locale };
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  console.log(roomId);
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
        <header>
          <Wrapper>Header</Wrapper>
        </header>
        <main>
          <Wrapper>Main</Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
