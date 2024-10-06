import React from "react";
import { Brand } from "..";
import { clsx } from "@/utils/clsx";

/**
 * Brand Wrapper Component
 * It is used to wrap components with the Brand component.
 * @param HTMLTag - HTML tag to be used as a wrapper.
 * @param className - Tailwind CSS classes to be added to the wrapper.
 * @param children - Array of classes, conditions, or external classes passed from parent components.
 */

export function BrandWrapper({
  children,
  HTMLTag,
  className,
  lang,
}: {
  children: React.ReactNode;
  HTMLTag?: "div" | "nav";
  className?: string;
  lang?: string;
}) {
  return HTMLTag === "div" ? (
    <div className={clsx(`w-full`, className)}>
      <Brand lang={lang} />
      {children}
    </div>
  ) : (
    HTMLTag === "nav" && (
      <nav className={clsx(`w-full`, className)}>
        <Brand lang={lang} />
        {children}
      </nav>
    )
  );
}
