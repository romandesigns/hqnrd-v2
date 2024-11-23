import { ShareBtn } from "@/components/ui";
import { GoBack } from "@/components/ui/GoBack";

export function Toolbar({
  data,
}: {
  data: {
    title: string;
    text: string;
    url: string;
  };
}) {
  return (
    <div className="flex w-full items-center justify-between py-4">
      <GoBack className="mx-0" />
      <ShareBtn metadata={data} className="mx-0 bg-transparent" />
    </div>
  );
}
