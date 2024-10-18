import { Locale } from "@/i18n-config";

import { Header, Wrapper } from "../../components";
import { RoomsHeaderProps } from "@/types";
import { Gallery } from "./Gallery";
import { CopyWritting } from "./CopyWritting";

export async function RoomsHeader({
  lang,
  slugs,
  dictionary,
}: {
  lang: Locale;
  slugs: RoomsHeaderProps[];
  dictionary: RoomsHeaderProps;
}) {
  console.log(dictionary);
  return (
    <Wrapper>
      <Header className="gap-20 py-10">
        <CopyWritting slugs={slugs} />
        <Gallery />
      </Header>
    </Wrapper>
  );
}
