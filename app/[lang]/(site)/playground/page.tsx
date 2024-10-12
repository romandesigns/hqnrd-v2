import { CardHeader } from "@/components/ui";
import React from "react";

export default function Playground() {
  return (
    <main className="flex h-screen items-center justify-center border border-red-500 bg-neutral-100 p-4">
      <div className="w-full">
        <CardHeader y={1} p={2} title="Double Bed" highlight="# 101" />
      </div>
    </main>
  );
}
