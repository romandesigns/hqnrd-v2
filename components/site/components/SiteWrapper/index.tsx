"use client";
import React from "react";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { useSiteMobileNavigation } from "@/hooks";
import { SiteNavigationTypes } from "@/types";

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
  const { isOpen } = useSiteMobileNavigation();
  return (
    <div className="grid w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      {/* Page Navigation */}
      {showNavigation && (
        <Navigation lang={lang} navIsOpen={isOpen} navStrings={dictionary} />
      )}

      {/* Page Content */}
      {children}
      {/* Page Footer */}
      {showFooter && <Footer lang={lang} dictionary={dictionary.footer} />}
    </div>
  );
}
