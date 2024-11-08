import { ContactWidget, GoBack } from "@/components/ui";
import { RoomsHeaderCopyProps } from "@/types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { CategorySelect } from "./CategoriesSelect";

/**
 * CopyWritting Header Component
 * It is used to wrap components with the Brand component.
 * @param lang - Language of the website.
 * @param dictionary - RoomsHeaderCopyProps object.
 * @returns CopyWritting component with title, review, highlight, and buttons.
 **/

export function CopyWritting({
  lang,
  slugs,
  dictionary,
  rooms,
}: RoomsHeaderCopyProps) {
  return (
    <section className="flex flex-col items-start justify-start gap-2 lg:gap-8">
      <div className="max-lg:mb-10 max-lg:hidden">
        <GoBack />
      </div>
      <div className="flex flex-col items-start justify-start gap-4 max-lg:mx-auto max-lg:text-center">
        <small className="font-semibold max-lg:mx-auto max-lg:hidden">
          {dictionary.header.highlight}
        </small>
        <h2
          className={twMerge(
            `text-5xl font-extrabold max-lg:mx-auto max-lg:hidden max-lg:text-center max-lg:text-3xl`,
            classNames({
              "text-4x w-full": lang === "es",
            }),
          )}
        >
          {dictionary.header.title}
        </h2>
        <p className="max-w-[90%] text-sm max-lg:mx-auto max-lg:hidden max-lg:text-[0.8rem]">
          {dictionary.header.complementaryText}
        </p>
      </div>
      <CategorySelect
        slugs={slugs}
        lang={lang}
        placeholder={dictionary.header.selectText}
        title={dictionary.header.title}
      />
      <div className="flex w-full max-lg:justify-center lg:justify-start">
        <ContactWidget
          lang={lang}
          className="items-center justify-center max-lg:hidden lg:flex"
        />
      </div>
    </section>
  );
}
