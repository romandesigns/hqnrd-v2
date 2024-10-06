"use client";
import React from "react";
import { Navigation } from "../Navigation";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

/**
 * Site Wrapper Component
 * It is used to wrap page components with the Navigation and Footer component.
 * @param children - Array of classes, conditions, or external classes passed from parent components.
 * @param lang - Language of the website.
 * @returns Site Wrapper component with Navigation, Page Content, and Footer.
 * @see Navigation
 * @see Footer
 */

function useCounter() {
  return useStore(
    useShallow((store) => ({
      isOpen: store.isOpen,
    })),
  );
}

export function SiteWrapper({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const { isOpen } = useCounter();
  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
      {/* Page Navigation */}
      <Navigation lang={lang} navIsOpen={isOpen} />
      {/* Page Content */}
      {children}
      {/* Page Footer */}
      <p>Footer</p>
    </div>
  );
}
