"use client";
import React from "react";
import { Button } from "..";
import { FaShareNodes } from "@/components/icons";
import { SiteMetaData } from "@/types";

async function handleShareDetails({ metadata }: SiteMetaData) {
  try {
    await navigator.share(metadata);
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}

export function ShareBtn({ metadata }: { metadata: SiteMetaData }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="mx-2"
      onClick={() => handleShareDetails(metadata)}
    >
      <FaShareNodes />
    </Button>
  );
}
