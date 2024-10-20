import { FaArrowLeft } from "@/components/icons";
import { Button } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slugs } from "@/types";
import Link from "next/link";

export function CategorySelect({
  slugs,
  lang,
  placeholder,
  title,
}: {
  lang: string;
  placeholder: string;
  slugs: Slugs[];
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
        <h3 className="max-sm:text-md mx-auto my-4 max-w-[17rem] text-center text-xl font-black uppercase max-sm:mt-0 max-sm:leading-tight">
          {title}
        </h3>
      </div>
      <Select>
        <SelectTrigger className="h-14 bg-white">
          <SelectValue placeholder={placeholder} className="font-bold" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {slugs.map((option, index) => (
              <SelectItem key={index} value={option.slug}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
