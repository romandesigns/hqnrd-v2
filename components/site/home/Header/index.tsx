import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next/types";
import { Wrapper } from "../../components";
import { CopyWritting } from "./CopyWritting";
import { Gallery } from "./Gallery";
export const metadata: Metadata = {
  title: "Hotel Quinto Nivel RD",
  description:
    "Discover unmatched comfort and elegance at Hotel Quinto Nivel RD. Perfect for solo travelers, families, and romantic getaways. Book your stay now!",
  keywords:
    "Hotel Quinto Nivel, luxury hotel Salcedo, comfortable accommodations, family-friendly hotel, romantic getaways, hotel reservations, Salcedo tourism",
  robots: "index, follow",
};

export async function HomeHeader({ lang }: { lang: string }) {
  const {
    site: {
      component: { page },
    },
  } = await getDictionary(lang as Locale);

  return (
    <Wrapper>
      <header className="grid grid-cols-1 grid-rows-[auto_auto] items-center rounded-md px-2 py-20 lg:grid-cols-2 lg:grid-rows-1">
        <CopyWritting lang={lang} dictionary={page.home} />
        <Gallery lang={lang} />
      </header>
    </Wrapper>
  );
}
