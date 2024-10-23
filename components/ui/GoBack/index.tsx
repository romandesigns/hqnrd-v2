"use client";
import React from "react";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "@/components/icons";

export function GoBack() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button onClick={() => handleGoBack()} size="icon" variant="ghost">
      <FaArrowLeft className="text-lg" />
    </Button>
  );
}
