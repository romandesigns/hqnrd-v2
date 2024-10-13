import { Brand } from "@/components/ui";
import { data } from "@/public/assets/data";
import { Wrapper } from "..";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";

export async function Footer({
  lang,
  dictionary,
}: {
  lang: string;
  dictionary: { ctaText: string; mapHeading: string };
}) {
  return (
    <footer className="bg-primary px-4">
      <Wrapper className="my-10 rounded-md bg-primary-foreground/5 p-4 py-10">
        <div className="rounded-md">
          <Brand classNames="text-white" lang={lang} />
        </div>
        <div className="flex max-[819px]:flex-col">
          <Contact
            metadata={{ metadata: data.site.shareData }}
            dictionary={dictionary}
          />
          <SocialMedia dictionary={dictionary} />
        </div>
      </Wrapper>
    </footer>
  );
}
