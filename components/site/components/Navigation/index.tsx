import { NavContainer } from "@/components/motion/SlidingContainer";
import { BrandWrapper, ModeToggle, NavigationToggleBtn } from "@/components/ui";
import { RoomReservationInterface, SiteNavigationTypes } from "@/types";
import clsx from "clsx";
import { Wrapper } from "../Wrapper";
import { Bookings } from "./Bookings";
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
  reservations,
}: {
  lang: string;
  navIsOpen: boolean;
  navStrings: SiteNavigationTypes;
  reservations: RoomReservationInterface[];
}) {
  return (
    <Wrapper
      className={clsx(
        "sticky top-0 z-[4] flex flex-col items-end justify-end rounded-md bg-background p-2 after:absolute after:inset-x-0 after:top-0 after:z-[1] after:block after:h-full after:backdrop-blur-lg after:content-[''] max-lg:bg-background max-lg:before:absolute max-lg:before:left-0 max-lg:before:right-0 max-lg:before:top-2 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-transparent max-lg:before:shadow-md max-lg:before:backdrop-blur-lg lg:translate-y-4 lg:overflow-hidden lg:rounded-full lg:bg-background/80",
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
          <Bookings reservations={reservations} lang={lang} />
          <ModeToggle navStrings={navStrings.themeMenu} />
          <NavigationToggleBtn />
        </div>
        {/* Show Desktop navigation on viewport greater than 1024px */}
        <NavigationMenu
          lang={lang}
          classNames="hidden lg:flex lg:w-auto"
          navStrings={navStrings}
          reservations={reservations}
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
              reservations={reservations}
            />
          </div>
        </div>
      </NavContainer>
    </Wrapper>
  );
}
