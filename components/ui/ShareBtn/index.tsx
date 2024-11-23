"use client";
import { FaShareNodes } from "@/components/icons";
import { ShareMetadata } from "@/types";
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

export function ShareBtn({
  metadata,
  className,
  variant = "ghost",
}: {
  metadata: ShareMetadata;
  className?: string;
  variant?:
    | "ghost"
    | "link"
    | "outline"
    | "secondary"
    | "destructive"
    | "default"
    | null
    | undefined;
}) {
  return (
    <Button
      size="icon"
      variant={variant}
      className={clsx(`mx-2`, className)}
      onClick={() => handleShareDetails(metadata)}
    >
      <FaShareNodes />
    </Button>
  );
}
