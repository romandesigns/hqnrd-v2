import { BrandWrapper, ModeToggle, NavigationToggleBtn } from "@/components/ui";
import clsx from "clsx";
import { Wrapper } from "../Wrapper";
import { NavigationMenu } from "./Menu";
import { NavContainer } from "@/framerMotion/SlidingContainer";
import { SiteNavigationTypes } from "../SiteWrapper";

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
      className={clsx("flex flex-col items-end justify-end border-b p-2")}
    >
      {/* Show the theme toggle button and open/close navigation btn in mobile screens */}
      <BrandWrapper
        lang={lang}
        className="z-[2] flex h-fit items-start justify-between lg:flex-row lg:items-center"
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
        className="fixed inset-0 top-auto z-[1] flex h-[calc(100vh-3.7rem)] w-full flex-1 items-center justify-center bg-background p-4 lg:hidden"
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="min-md:w-full flex w-5/6 items-center justify-center">
            <NavigationMenu
              lang={lang}
              classNames="w-full flex items-stretch justify-stretch gap-4"
              navStrings={navStrings}
            />
          </div>
        </div>
      </NavContainer>
    </Wrapper>
  );
}
