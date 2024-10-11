"use client";
import React, { useEffect } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotationType } from "rough-notation/lib/model";

interface TextHighlightProps {
  elId: string;
  text: string;
  highlightType: RoughAnnotationType;
  color: string;
  delay?: number;
  className?: string;
}

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
