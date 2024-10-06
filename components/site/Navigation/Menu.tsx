import { Button, ContactWidget, ModeToggle } from "@/components/ui";
import { clsx } from "@/utils/clsx";
import Link from "next/link";

export function NavigationMenu({
  lang,
  classNames,
}: {
  lang: string;
  classNames?: string;
}) {
  return (
    <ul
      className={clsx(
        "flex w-full text-sm max-lg:flex-col [&>li]:border-purple-500",
        classNames,
      )}
    >
      <li className="w-full">
        <Button
          variant="ghost"
          className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
          asChild
        >
          <Link href={`/${lang}`}>Home</Link>
        </Button>
      </li>
      <li className="w-full">
        <Button
          variant="ghost"
          className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
          asChild
        >
          <Link href={`/${lang}/habitaciones`}>Rooms</Link>
        </Button>
      </li>
      <li className="lg:block lg:px-4" />
      <li>
        <ContactWidget />
      </li>
      <li className="w-full max-lg:mt-3">
        <ul className="mt-auto flex flex-col gap-4 lg:flex-row">
          <li className="w-full">
            <Button
              variant="default"
              className="w-full max-lg:h-10 lg:h-8"
              asChild
            >
              <Link href={`/${lang}/iniciar-session`}>Sign In</Link>
            </Button>
          </li>
          <li className="w-full">
            <Button
              variant="ghost"
              className="max-lg:h-10 max-lg:w-full max-lg:border max-lg:shadow-sm lg:h-8"
            >
              Sign Up
            </Button>
          </li>
          <li className="hidden lg:block">
            <ModeToggle />
          </li>
        </ul>
      </li>
    </ul>
  );
}
