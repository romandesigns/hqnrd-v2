import { CONSTANTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Brand({
  width = 24,
  height = 24,
  lang,
}: {
  width?: number;
  height?: number;
  lang: string;
}) {
  return (
    <Link href={`/${lang}`} className="flex items-center justify-start gap-2">
      <div>
        <Image
          src={CONSTANTS.site.site_logo}
          width={width}
          height={height}
          alt={CONSTANTS.site.site_name}
        />
      </div>
      <div>
        <h1 className="pt-1 text-[0.7rem] font-black uppercase">
          {CONSTANTS.site.site_name}
        </h1>
        <p className="text-xs font-medium">{CONSTANTS.site.site_slogan}</p>
      </div>
    </Link>
  );
}
