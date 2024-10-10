import { Button } from "@/components/ui";
import Link from "next/link";
import { IconType } from "react-icons/lib";

export function CategoryCard({
  btnText,
  title,
  description,
  slug,
  Icon,
}: {
  btnText: string;
  title: string;
  description: string;
  slug: string;
  Icon: IconType;
}) {
  return (
    <article className="glass-effect">
      <header className="flex w-full flex-col">
        <div className="flex w-full">
          <div className="h-8 flex-[.1] rounded-tl-md rounded-tr-md bg-background" />
          <div className="relative max-w-16 flex-auto rounded-bl-md rounded-br-md bg-transparent p-2 pt-0 shadow-[3px_6px_0px_3px_hsl(var(--background))] after:absolute after:bottom-2 after:left-2 after:right-2 after:mx-auto after:flex after:aspect-square after:h-10 after:items-center after:justify-center after:rounded-md after:bg-foreground after:py-6 after:font-bold after:text-primary-foreground after:max-sm:px-6 after:max-sm:text-xs">
            <Icon className="absolute -top-[.8rem] left-0 right-0 z-[2] mx-auto h-7 w-7 text-primary-foreground" />
          </div>
          <div className="h-8 flex-1 rounded-tl-md rounded-tr-md bg-background" />
        </div>
        <div className="h-3 w-full bg-background" />
      </header>
      <div className="flex flex-col bg-background p-4 pb-0">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="py-4 text-sm font-normal">{description}</p>
      </div>
      <footer className="rounded-bl-md rounded-br-md bg-background pb-4 pl-4 pr-4 text-xs">
        <Button asChild className="w-full">
          <Link href={`/habitaciones/${slug}`} className="block py-6">
            {btnText}
          </Link>
        </Button>
      </footer>
    </article>
  );
}
