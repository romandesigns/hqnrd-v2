import React from "react";

export function Heading({ text }: { text: string }) {
  return <h3 className="text-md font-bold">{text}</h3>;
}
