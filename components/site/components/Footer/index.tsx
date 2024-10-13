import React from "react";
import { Wrapper } from "..";
import { Brand } from "@/components/ui";
import { Contact } from "./Contact";
import { SocialMedia } from "./SocialMedia";
import { data } from "@/public/assets/data";

export function Footer() {
  return (
    <footer className="bg-primary px-4">
      <Wrapper className="my-10 rounded-md bg-primary-foreground/5 p-4 py-10">
        <div className="rounded-md">
          <Brand classNames="text-white" />
        </div>
        <div className="flex max-[819px]:flex-col">
          <Contact siteSharableData={data.site.shareData} />
          <SocialMedia />
        </div>
      </Wrapper>
    </footer>
  );
}
