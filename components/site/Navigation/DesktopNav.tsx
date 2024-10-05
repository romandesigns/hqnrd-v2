"use client";
import { Button } from "@/components/ui";
import { BrandWrapper } from "@/components/ui/BrandWrapper";
import Link from "next/link";
import { Wrapper } from "../Wrapper";

export const DesktopNav = ({
  lang,
  className,
}: {
  lang: string;
  className: string;
}) => {
  return (
    <Wrapper>
      <BrandWrapper
        className="flex items-center justify-between p-2 max-md:hidden"
        HTMLTag="nav"
      >
        <ul className="flex text-sm">
          <li>
            <Button size="default" variant="link" asChild>
              <Link href={`/${lang}`}>Home</Link>
            </Button>
          </li>
          <li>
            <Button size="default" variant="link" asChild>
              <Link href={`/${lang}/habitaciones`}>Rooms</Link>
            </Button>
          </li>
          <li className="px-4" />
          <li className="mr-2">
            <Button variant="default" size={"sm"} asChild>
              <Link href={`/${lang}/iniciar-session`}>Sign In</Link>
            </Button>
          </li>
          <li className="ml-2">
            <Button
              variant="outline"
              size={"sm"}
              className="bg-primary-accent-500"
            >
              Sign Out
            </Button>
          </li>
        </ul>
      </BrandWrapper>
    </Wrapper>
  );
};
