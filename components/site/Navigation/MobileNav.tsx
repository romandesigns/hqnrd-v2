import { Button } from "@/components/ui";
import { BrandWrapper } from "@/components/ui/BrandWrapper";
import Link from "next/link";
import { Wrapper } from "../Wrapper";
import { clsx } from "@/utils/clsx";

export const MobileNav = ({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) => {
  return (
    <Wrapper className={clsx(className)}>
      <BrandWrapper
        className="flex flex-col items-center justify-between p-2"
        HTMLTag="nav"
      >
        <ul className="flex flex-col text-sm">
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
