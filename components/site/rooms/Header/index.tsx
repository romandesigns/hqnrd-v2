import React from "react";
import { Header, Wrapper } from "../../components";
import { Locale } from "@/i18n-config";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RoomsHeaderProps } from "@/types";
import { ContactWidget } from "@/components/ui";

export async function RoomsHeader(props: {
  lang: Locale;
  slugs: RoomsHeaderProps[];
}) {
  const { lang, slugs } = await props;
  return (
    <Wrapper>
      <Header className="gap-20 py-10">
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
              Find the perfect space that fits your needs, whether for
              relaxation, work, or a memorable getaway.
            </p>
          </div>
          <Select>
            <SelectTrigger className="h-14">
              <SelectValue placeholder="Browse Rooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {slugs.map((option, index) => (
                  <SelectItem key={index} value={option.slug}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <small className="text-neutral-400">
            Showing <span className="font-bold text-neutral-800">18</span> Rooms
          </small>
          <ContactWidget
            lang={lang}
            className="items-center justify-center lg:flex"
          />
        </section>
        <section className="relative flex aspect-square items-center justify-center rounded-md">
          <figure className="aspect-square w-4/6 rounded-md bg-neutral-700" />
          <figure className="absolute inset-10 -z-[1] aspect-square w-2/6 rounded-md bg-red-700" />
          <figure className="absolute bottom-16 right-16 z-[1] aspect-square w-2/6 rounded-md bg-red-700" />
          <figure className="absolute bottom-16 left-16 -z-[1] aspect-square w-40 rounded-md border-[1.4rem] border-purple-800 bg-transparent" />
          <figure className="absolute right-16 top-16 -z-[1] aspect-square w-40 rounded-md border-[1.4rem] border-orange-800 bg-transparent" />
        </section>
      </Header>
    </Wrapper>
  );
}
