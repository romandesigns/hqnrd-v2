"use client";
import React from "react";
import { Button } from "..";
import { FaShareNodes } from "@/components/icons";

export function ShareBtn() {
  return (
    <Button size="icon" variant="ghost" className="mx-2">
      <FaShareNodes />
    </Button>
  );
}
