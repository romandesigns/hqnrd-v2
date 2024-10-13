"use client";
import React from "react";
import { Button } from "..";
import { FaShareNodes } from "@/components/icons";

async function handleShareDetails(data: {
  title: string;
  text: string;
  url: string;
}) {
  try {
    await navigator.share(data);
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
}

export function ShareBtn({
  siteSharableData,
}: {
  siteSharableData: {
    title: string;
    text: string;
    url: string;
  };
}) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="mx-2"
      onClick={() => handleShareDetails(siteSharableData)}
    >
      <FaShareNodes />
    </Button>
  );
}
