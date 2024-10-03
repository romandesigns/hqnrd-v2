import { CONSTANTS } from "@/constants";
import Image from "next/image";

export function Brand({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className="flex items-center justify-start gap-2">
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
    </div>
  );
}
