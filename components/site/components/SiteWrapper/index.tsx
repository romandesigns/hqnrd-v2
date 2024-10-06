"use client";
import React from "react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { useSiteMobileNavigation } from "@/hooks";

export interface SiteNavigationTypes {
  navigation: {
    home: string;
    rooms: string;
    signIn: string;
    signUp: string;
    signOut: string;
  };
  themeMenu: {
    light: string;
    dark: string;
    system: string;
  };
}

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
}: {
  children: React.ReactNode;
  lang: string;
  dictionary: SiteNavigationTypes;
}) {
  const { isOpen } = useSiteMobileNavigation();

  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      {/* Page Navigation */}
      <Navigation lang={lang} navIsOpen={isOpen} navStrings={dictionary} />
      {/* Page Content */}
      {children}
      {/* Page Footer */}
      <Footer />
    </div>
  );
}
