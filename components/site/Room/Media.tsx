import { HeroVideoDialogDemo } from "@/components/ui/VideoPlayer";
import { Heading } from ".";

export function Media() {
  return (
    <div className="flex h-80 items-start justify-start gap-4 py-4">
      <div className="h-full w-full">
        <Heading text="Layout" />
        <div className="aspect-square h-full w-full overflow-hidden rounded-md border bg-pink-500" />
      </div>
      <div className="h-full w-full">
        <Heading text="Walkthrough" />
        <div className="aspect-video h-full w-full overflow-hidden rounded-md border">
          <HeroVideoDialogDemo />
        </div>
      </div>
    </div>
  );
}
