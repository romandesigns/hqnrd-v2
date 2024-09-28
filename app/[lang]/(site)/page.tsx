import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const text = await getDictionary(lang);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {text["server-component"].home_page.welcome}
        <Button>Click Me</Button>
      </main>
    </div>
  );
}
