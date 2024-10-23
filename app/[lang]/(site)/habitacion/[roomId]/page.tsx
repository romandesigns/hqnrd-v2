import { SiteWrapper, Wrapper } from "@/components/site/components";
import { Button, Divider } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoBack } from "@/components/ui/GoBack";
import { DateTimePicker } from "@/components/ui/datePickerWithTime";

export default async function Page(props: {
  params: Promise<{ roomId: string; lang: Locale }>;
}) {
  const params = await props.params;

  const { roomId, lang } = params;

  const {
    site: { component },
  } = await getDictionary(lang);

  return (
    <SiteWrapper
      lang={lang}
      showFooter
      showNavigation
      dictionary={{
        navigation: component.navigation,
        themeMenu: component.themeMenu,
        footer: component.footer,
      }}
    >
      <>
        <Wrapper className="flex items-center justify-between px-2 max-sm:flex-col">
          <GoBack />
          <div className="flex items-center justify-center py-10 sm:flex-col sm:items-start sm:justify-start lg:py-20 lg:pb-4">
            <Divider classNames="my-0">
              <small className="text-xs font-medium max-sm:text-sm">
                Unit {roomId}
              </small>
            </Divider>
            <h2 className="text-lg font-bold sm:text-3xl">DOUBLE BED ROOM</h2>
          </div>
          <Dialog>
            <DialogTrigger className="text-forground rounded-lg border bg-foreground p-2 px-4 text-sm text-primary-foreground shadow hover:bg-foreground">
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
                <div>
                  <DateTimePicker />
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </Wrapper>
        <header className="">
          <Wrapper>
            <div className="grid grid-cols-4 grid-rows-2 gap-2">
              <figure className="col-span-2 row-span-2 aspect-square rounded-lg bg-pink-500" />
              <figure className="col-start-3 col-end-5 rounded-lg bg-purple-500" />
              <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg bg-orange-500" />
              <figure className="col-start-4 col-end-5 rounded-lg bg-yellow-500" />
            </div>
          </Wrapper>
        </header>
        <main>
          <Wrapper>Main</Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
