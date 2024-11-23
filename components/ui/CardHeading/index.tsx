import { htmlParser } from "@/lib/utils";
import { clsx } from "@/utils/clsx";

export function CardHeading({
  text = "Enter Price",
  classNames,
}: {
  text: string;
  classNames?: string;
}) {
  return (
    <div className={clsx(`relative flex w-full`, classNames)}>
      <div
        className={clsx(
          `flex-1 bg-transparent before:absolute before:-bottom-[2px] before:z-[2] before:block before:h-1 before:w-full before:bg-[#151717] before:content-[''] after:relative after:-bottom-[14px] after:block after:h-[50%] after:w-full after:rounded-br-lg after:shadow-[1px_2px_0px_1px_#151717] after:content-['']`,
        )}
      />
      <div
        className={clsx(
          `flex w-auto items-center justify-center rounded-tl-md rounded-tr-md bg-[#151717] px-4 py-1`,
        )}
      >
        {htmlParser(text)}
      </div>
    </div>
  );
}
