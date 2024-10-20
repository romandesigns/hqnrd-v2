import { Locale } from "@/i18n-config";

import { Header, Wrapper } from "../../components";
import { RoomsHeaderCopyProps, RoomsHeaderProps, Slugs } from "@/types";
import { Gallery } from "./Gallery";
import { CopyWritting } from "./CopyWritting";

export async function RoomsHeader({
  dictionary,
  lang,
  slugs,
  rooms,
}: RoomsHeaderCopyProps) {
  return (
    <Wrapper>
      <Header className="gap-20 py-10 max-sm:gap-0 max-sm:py-0">
        <CopyWritting
          lang={lang}
          slugs={slugs}
          dictionary={dictionary}
          rooms={rooms}
        />
        <Gallery />
      </Header>
    </Wrapper>
  );
}
