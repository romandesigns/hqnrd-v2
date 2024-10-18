import { HomeHeaderCopyProps } from "@/types";
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
/**
 * @title Home Header
 * @description Home Header component
 * @export
 * @param {{
 *   lang: string;
 *   dictionary: HomeHeaderCopyProps;
 * }} {
 *   lang,
 *   dictionary,
 * }
 * @return {*}
 */
export async function HomeHeader({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: HomeHeaderCopyProps;
}) {
  return (
    <Wrapper>
      <header className="grid grid-cols-1 grid-rows-[auto_auto] items-center rounded-md px-2 py-20 lg:grid-cols-2 lg:grid-rows-1">
        <CopyWritting lang={lang} dictionary={dictionary} />
        <Gallery lang={lang} />
      </header>
    </Wrapper>
  );
}
