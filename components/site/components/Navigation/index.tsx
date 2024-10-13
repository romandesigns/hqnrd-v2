import { BrandWrapper, ModeToggle, NavigationToggleBtn } from "@/components/ui";
import { NavContainer } from "@/framerMotion/SlidingContainer";
import { SiteNavigationTypes } from "@/types";
import clsx from "clsx";
import { Wrapper } from "../Wrapper";
import { NavigationMenu } from "./Menu";

/**
 * Navigation Component
 * It is used to wrap components with the Brand component.
 * @param lang - Language of the website.
 * @returns Navigation component with theme toggle and navigation menu.
 **/

export function Navigation({
  lang,
  navIsOpen,
  navStrings,
}: {
  lang: string;
  navIsOpen: boolean;
  navStrings: SiteNavigationTypes;
}) {
  return (
    <Wrapper
      className={clsx(
        "after:backdrop min-lg:shadow-black/5 min-lg:shadow sticky top-0 z-[4] flex flex-col items-end justify-end rounded-md border-b bg-background/70 p-2 after:absolute after:inset-x-0 after:top-0 after:z-[1] after:block after:h-full after:bg-background/50 after:backdrop-blur-sm after:content-['']",
      )}
    >
      {/* Show the theme toggle button and open/close navigation btn in mobile screens */}
      <BrandWrapper
        lang={lang}
        className="z-[4] flex h-fit items-start justify-between lg:flex-row lg:items-center"
        HTMLTag="nav"
      >
        {/* Show the theme toggle button and open/close navigation btn in mobile screens */}
        <div className="ml-auto space-x-4 lg:hidden">
          <ModeToggle navStrings={navStrings.themeMenu} />
          <NavigationToggleBtn />
        </div>
        {/* Show Desktop navigation on viewport greater than 1024px */}
        <NavigationMenu
          lang={lang}
          classNames="hidden lg:flex lg:w-auto"
          navStrings={navStrings}
        />
      </BrandWrapper>

      {/* Div will show it's children on mobile devices */}
      <NavContainer
        isOpen={navIsOpen}
        className="fixed inset-0 top-auto z-[3] flex h-full w-full flex-1 items-center justify-center bg-background p-4 lg:hidden"
      >
        <div className="grid h-full w-full grid-cols-1 grid-rows-[1fr_2fr] items-center justify-center">
          <div className="h-full" />
          <div className="min-md:w-full flex h-full items-center justify-center">
            <NavigationMenu
              lang={lang}
              classNames="w-full flex items-stretch justify-stretch gap-4 h-full"
              navStrings={navStrings}
            />
          </div>
        </div>
      </NavContainer>
    </Wrapper>
  );
}
