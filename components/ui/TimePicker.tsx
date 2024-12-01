"use client";
import React, { SetStateAction, useEffect } from "react";
import { FaChevronDown, FaRegClock } from "../icons";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";

export function TimePicker({
  setTimeToCheckIn,
}: {
  setTimeToCheckIn: React.Dispatch<SetStateAction<string | undefined>>;
}) {
  const [selectedHrs, setSelectedHrs] = React.useState<
    number | string | undefined
  >("--");
  const [selectedMer, setSelectedMer] = React.useState<string | undefined>(
    "--",
  );
  const [selectedMins, setSelectedMins] = React.useState<
    number | string | undefined
  >("--");

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 13 }, (_, i) => i * 5);
  const meridians = ["AM", "PM"];

  useEffect(() => {
    setTimeToCheckIn(`${selectedHrs}:${selectedMins} ${selectedMer}`);
  }, [selectedHrs, selectedMins, selectedMer]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="text-muted-foreground flex items-center justify-start border text-xs"
        >
          <FaRegClock />
          <span>{selectedHrs}</span>
          <span>:</span>
          <span>{selectedMins}</span>
          <span>{selectedMer}</span>
          <div className="ml-auto">
            <FaChevronDown />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2">
        <div className="flex w-auto gap-2">
          <div>
            <h3 className="mb-1 rounded-md bg-muted p-1 px-4 text-center text-sm font-semibold">
              H
            </h3>
            <ScrollArea className="flex h-48 flex-col px-2">
              <div className="flex flex-col gap-2 px-1">
                {hours.map((hour) => (
                  <Button
                    key={hour}
                    variant="ghost"
                    size="sm"
                    className={`aspect-square h-10 w-10 ${
                      hour === selectedHrs
                        ? "border-primary bg-accent text-foreground"
                        : ""
                    }`}
                    onClick={() => setSelectedHrs(hour)}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <h3 className="mb-1 rounded-md bg-muted p-1 px-4 text-center text-sm font-semibold">
              M
            </h3>
            <ScrollArea className="flex h-48 flex-col px-2">
              <div className="flex flex-col gap-2 px-1">
                {minutes.map((min) => (
                  <Button
                    key={min}
                    variant="ghost"
                    size="sm"
                    className={`aspect-square h-10 w-10 ${
                      min === selectedMins
                        ? "border-primary bg-accent text-foreground"
                        : ""
                    }`}
                    onClick={() => setSelectedMins(min > 5 ? min : `0${min}`)}
                  >
                    {min > 5 ? min : `0${min}`}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <h3 className="mb-1 rounded-md bg-muted p-1 px-4 text-center text-sm font-semibold">
              M
            </h3>
            <ScrollArea className="flex h-48 flex-col px-2">
              <div className="flex flex-col gap-2 px-1">
                {meridians.map((mer) => (
                  <Button
                    key={mer}
                    variant="ghost"
                    size="sm"
                    className={`aspect-square h-10 w-10 ${
                      mer === selectedMer
                        ? "border-primary bg-accent text-foreground"
                        : ""
                    }`}
                    onClick={() => setSelectedMer(mer)}
                  >
                    {mer}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
        <div>
          <Button
            onClick={() => (
              setSelectedHrs(undefined),
              setSelectedMins(undefined),
              setSelectedMer(undefined)
            )}
            size="block"
            variant="ghost"
          >
            Reset
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
