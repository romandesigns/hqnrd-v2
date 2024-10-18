import { CopyWrittingProps } from "@/types";
import { Metadata } from "next/types";
import { Header, Wrapper } from "../../components";
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
 *   dictionary: CopyWrittingProps;
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
  dictionary: CopyWrittingProps;
}) {
  return (
    <Wrapper>
      <Header>
        <CopyWritting lang={lang} dictionary={dictionary} />
        <Gallery lang={lang} />
      </Header>
    </Wrapper>
  );
}
