import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import React from "react";

export default async function Page({
  params: { category, lang },
}: {
  params: { category: string; lang: Locale };
}) {
  const {
    site: {
      component: {
        page: { rooms },
      },
    },
  } = await getDictionary(lang);
  console.log(rooms);
  return (
    <div>
      <p>Category: {category}</p>
    </div>
  );
}
