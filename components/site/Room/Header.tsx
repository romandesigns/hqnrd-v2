import { Wrapper } from "../components";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactWidget, Divider } from "@/components/ui";
import { GoBack } from "@/components/ui/GoBack";

export function Header({ roomId, lang }: { roomId: string; lang: string }) {
  return (
    <Wrapper className="flex items-center justify-between rounded-bl-md rounded-br-md bg-background/80 px-2 backdrop-blur-md max-lg:sticky max-lg:top-[50.79px] max-sm:flex-col lg:sticky lg:top-[53.56px] lg:px-6 lg:py-10 lg:pb-3">
      <div className="flex w-full items-center justify-start py-1 pt-3 lg:hidden">
        <GoBack />
      </div>

      <div className="sm:flex-col sm:items-start sm:justify-start lg:items-center lg:pb-4">
        <Divider classNames="my-0 w-full lg:hidden">
          <small className="text-xs font-medium text-foreground max-sm:text-sm">
            Unit {roomId}
          </small>
        </Divider>
        <small className="hidden text-lg font-bold max-sm:text-sm lg:inline-block">
          Unit {roomId}
        </small>
        <h2 className="text-lg font-black sm:text-3xl">DOUBLE BED ROOM</h2>
      </div>
      <div className="py-2 max-lg:w-full">
        <div className="hidden rounded-md bg-background px-4 lg:flex">
          <ContactWidget lang={lang} className="lg:flex" />
        </div>
        <div className="lg:hidden">
          <Dialog>
            <DialogTrigger className="text-forground w-full rounded-lg border bg-foreground p-2 px-4 text-sm text-background shadow">
              Make Reservation
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reservation Form</DialogTitle>
                {/* <DialogDescription>
            This action cannot be undone. This will permanently delete
            your account and remove your data from our servers.
          </DialogDescription> */}
              </DialogHeader>
              <form className="mt-8">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Label
                      htmlFor="adults_quantity"
                      className="flex-center flex flex-col justify-start gap-2"
                    >
                      <div>Adults</div>
                      <Input
                        type="number"
                        id="adults_quantity"
                        defaultValue="0"
                        min="0"
                      />
                    </Label>
                  </div>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Label
                      htmlFor="adults_quantity"
                      className="flex-center flex flex-col justify-start gap-2"
                    >
                      <div>Infants</div>
                      <Input
                        type="number"
                        id="infants_quantity"
                        defaultValue="0"
                        min="0"
                      />
                    </Label>
                  </div>
                </div>
                <div>Calender here</div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Wrapper>
  );
}
