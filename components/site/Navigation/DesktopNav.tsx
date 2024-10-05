import { HiMenuAlt1 } from "@/components/icons";
import { Button, ModeToggle } from "@/components/ui";
import { BrandWrapper } from "@/components/ui/BrandWrapper";
import { clsx } from "@/utils/clsx";
import { Wrapper } from "../Wrapper";
import { NavigationMenu } from "./Menu";

/**
 * Navigation Component
 * It is used to wrap components with the Brand component.
 * @param lang - Language of the website.
 * @param className - Tailwind CSS classes to be added to the wrapper.
 * @returns Navigation component with theme toggle and navigation menu.
 * @see BrandWrapper
 * @see ModeToggle
 * @see NavigationMenu
 */

export const DesktopNav = ({
  lang,
  className,
}: {
  lang: string;
  className?: string;
}) => {
  return (
    <Wrapper
      className={clsx(
        "flex flex-col items-end justify-end border-b p-8",
        className,
      )}
    >
      {/* Show the theme toggle button and open/close navigation btn in mobile screens */}
      <BrandWrapper
        lang={lang}
        className="z-[2] flex h-fit items-start justify-between lg:flex-row lg:items-center"
        HTMLTag="nav"
      >
        {/* Show the theme toggle button and open/close navigation btn in mobile screens */}
        <div className="ml-auto space-x-4 lg:hidden">
          <ModeToggle />
          <Button size="icon" variant="outline" className="text-lg lg:hidden">
            <HiMenuAlt1 />
          </Button>
        </div>
        {/* Show Desktop navigation on viewport greater than 1024px */}
        <NavigationMenu lang={lang} classNames="hidden lg:flex lg:w-auto" />
      </BrandWrapper>

      {/* Div will show it's children on mobile devices */}
      <div className="fixed inset-0 top-auto z-[1] flex h-[calc(100vh-4.2rem)] w-full flex-1 items-center justify-center bg-background p-4 lg:hidden">
        <div className="min-md:w-full flex w-5/6 items-center justify-center">
          <NavigationMenu
            lang={lang}
            classNames="w-full flex items-stretch justify-stretch gap-4"
          />
        </div>
      </div>
    </Wrapper>
  );
};
