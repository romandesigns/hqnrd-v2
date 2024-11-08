"use client";
import { FaArrowLeft } from "@/components/icons";
import { useRouter } from "next/navigation";
import { Button } from "../button";

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
