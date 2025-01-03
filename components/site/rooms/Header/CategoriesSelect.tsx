import { FaArrowLeft } from "@/components/icons";
import { DropDownSelect } from "@/components/motion";
import { Button } from "@/components/ui";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export function CategorySelect({
  slugs,
  lang,
  title,
}: {
  lang: Locale;
  slugs: string[];
  title: string;
}) {
  return (
    <div className="w-full bg-background/90 p-2 max-lg:fixed max-lg:inset-x-0 max-lg:top-[52.9px] max-lg:z-[3] max-lg:backdrop-blur-lg lg:p-0">
      <div className="lg:mb-10 lg:hidden">
        <Button asChild variant="ghost" size="icon">
          <Link href={`/${lang}`}>
            <FaArrowLeft className="text-lg" />
          </Link>
        </Button>
        <h3 className="mx-auto my-4 w-full text-center text-xl font-bold uppercase max-sm:mt-0 max-sm:text-sm max-sm:leading-tight">
          {title}
        </h3>
      </div>
      <DropDownSelect slugs={slugs} lang={lang} />
    </div>
  );
}
