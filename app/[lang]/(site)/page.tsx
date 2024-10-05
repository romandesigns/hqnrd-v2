import { SiteWrapper } from "@/components/site/SiteWrapper";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <SiteWrapper lang={lang}>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p>Home Page</p>
      </main>
    </SiteWrapper>
  );
}
