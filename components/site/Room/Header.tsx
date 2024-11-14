import { Button, ContactWidget, Divider } from "@/components/ui";

import { GoBack } from "@/components/ui/GoBack";
import { Wrapper } from "../components";
import { DialogForm } from "./DialogForm";

export function Header({
  unitNumber,
  lang,
}: {
  unitNumber: number;
  lang: string;
}) {
  return (
    <Wrapper className="z-[2] flex items-center justify-between rounded-bl-md rounded-br-md bg-background/80 px-2 pb-4 backdrop-blur-md max-lg:sticky max-lg:top-[50.79px] max-sm:flex-col lg:sticky lg:top-[53.56px] lg:px-6 lg:py-10 lg:pb-1">
      <div className="w-full">
        <div className="flex w-full items-center justify-start py-1 pt-3 lg:hidden">
          <GoBack className="mx-0" />
        </div>

        <div className="sm:items-start sm:justify-start sm:pl-2 lg:flex-col lg:items-center lg:pb-4">
          <Divider classNames="my-0 w-full sm:hidden">
            <small className="text-xs font-medium text-foreground max-sm:text-sm">
              Unit {unitNumber}
            </small>
          </Divider>
          <small className="hidden text-lg font-bold max-lg:text-sm sm:inline-block">
            Unit {unitNumber}
          </small>
          <h2 className="text-lg font-black max-sm:text-center sm:text-left sm:text-3xl">
            DOUBLE BED ROOM
          </h2>
        </div>
      </div>

      <div className="self-end py-2 max-lg:mx-auto max-lg:w-80">
        <div className="hidden rounded-md bg-background px-4 lg:flex">
          <ContactWidget lang={lang} className="lg:flex" />
        </div>
        <div className="lg:hidden">
          <DialogForm unitNumber={unitNumber} />
        </div>
      </div>
    </Wrapper>
  );
}
