"use client";
import React from "react";
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
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <div>
      {/* Page Navigation */}
      <Navigation lang={lang} />
      {/* Page Content */}
      {children}
      {/* Page Footer */}
      <p>Footer</p>
    </div>
  );
}
