"use client";
import React from "react";
import { Button } from "..";
import { FaShareNodes } from "@/components/icons";
import { SiteMetaData } from "@/types";
import { clsx } from "@/utils/clsx";

async function handleShareDetails({ metadata }: SiteMetaData) {
  try {
    await navigator.share(metadata);
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}

export function ShareBtn({
  metadata,
  className,
}: {
  metadata: SiteMetaData;
  className: string;
}) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={clsx(`mx-2`, className)}
      onClick={() => handleShareDetails(metadata)}
    >
      <FaShareNodes />
    </Button>
  );
}
