"use client";
import { FaArrowLeft } from "@/components/icons";
import { clsx } from "@/utils/clsx";
import { useRouter } from "next/navigation";
import { Button } from "../button";

export function GoBack({
  variant = "ghost",
  className,
}: {
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
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      onClick={() => handleGoBack()}
      size="icon"
      variant={variant}
      className={clsx(`mx-2`, className)}
    >
      <FaArrowLeft className="text-lg" />
    </Button>
  );
}
