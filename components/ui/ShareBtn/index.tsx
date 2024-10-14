"use client";
import { FaShareNodes } from "@/components/icons";
import { ShareMetadata, SiteMetaData } from "@/types";
import { clsx } from "@/utils/clsx";
import { Button } from "..";

async function handleShareDetails(metadata: ShareMetadata) {
  try {
    await navigator.share(metadata);
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}

export function ShareBtn({ metadata, className }: SiteMetaData) {
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
