import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { ContactWidget } from "@/components/ui";
import { CategorySelect } from "./CategoriesSelect";
import { RoomsHeaderCopyProps } from "@/types";

/**
 * CopyWritting Header Component
 * It is used to wrap components with the Brand component.
 * @param lang - Language of the website.
 * @param dictionary - RoomsHeaderCopyProps object.
 * @returns CopyWritting component with title, review, highlight, and buttons.
 **/

export function CopyWritting({
  slugs,
  lang,
  dictionary,
}: {
  slugs: { label: string; slug: string }[];
  lang: string;
  dictionary: RoomsHeaderCopyProps;
}) {
  return (
    <section className="flex flex-col items-start justify-start gap-8">
      <div className="flex flex-col items-start justify-start gap-4">
        <small className="font-semibold">Rooms Page!</small>
        <h2
          className={twMerge(
            `text-5xl font-extrabold max-lg:text-center max-lg:text-3xl`,
            classNames({
              "text-4xl": lang === "es",
            }),
          )}
        >
          Select your ideal room!
        </h2>
        <p className="max-w-[90%] text-sm">
          Find the perfect space that fits your needs, whether for relaxation,
          work, or a memorable getaway.
        </p>
      </div>
      <CategorySelect slugs={slugs} />
      <small className="text-neutral-400">
        Showing <span className="font-bold text-neutral-800">18</span> Rooms
      </small>
      <ContactWidget
        lang={lang}
        className="items-center justify-center lg:flex"
      />
    </section>
  );
}
