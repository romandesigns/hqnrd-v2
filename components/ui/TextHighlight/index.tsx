"use client";
import { TextHighlightProps } from "@/types";
import { useEffect } from "react";
import { annotate } from "rough-notation";

export function TextHighlight({
  elId,
  text,
  highlightType,
  color,
  delay = 0,
  className,
}: TextHighlightProps) {
  useEffect(() => {
    const element = document.querySelector(`#${elId}`);
    if (element) {
      const annotation = annotate(element as HTMLElement, {
        type: highlightType,
        color: color,
      });
      const timer = setTimeout(() => {
        annotation.show();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [elId, color, highlightType, delay]);

  return (
    <span id={elId} className={className}>
      {text}
    </span>
  );
}
