"use client";
import { SiteNavigationTypes } from "@/types";
import { useMobileNavigation, useReservation } from "@/zustand/hooks";
import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";

/**
 * Site Wrapper Component
 * It is used to wrap page components with the Navigation and Footer component.
 * @param children - Array of classes, conditions, or external classes passed from parent components.
 * @param lang - Language of the website.
 * @returns Site Wrapper component with Navigation, Page Content, and Footer.
 * @see Navigation
 * @see Footer
 */

export function SiteWrapper({
  children,
  lang,
  dictionary,
  showNavigation,
  showFooter,
}: {
  children: React.ReactNode;
  lang: string;
  dictionary: SiteNavigationTypes;
  showNavigation?: boolean;
  showFooter?: boolean;
}) {
  const { isOpen } = useMobileNavigation();
  const { reservations } = useReservation();

  return (
    <div className="relative grid w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      {showNavigation && (
        <Navigation
          lang={lang}
          navIsOpen={isOpen}
          navStrings={dictionary}
          reservations={reservations}
        />
      )}
      {children}
      {showFooter && <Footer lang={lang} dictionary={dictionary.footer} />}
    </div>
  );
}
