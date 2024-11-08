import { SiteWrapper, Wrapper } from "@/components/site/components";
import { Divider } from "@/components/ui";
import { GoBack } from "@/components/ui/GoBack";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

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
        </Wrapper>
        <header className="max-lg:p-2">
          <Wrapper className="rounded-md border p-2 lg:p-1">
            <div className="grid grid-cols-4 grid-rows-2 gap-1 lg:p-2">
              <figure className="col-span-2 row-span-2 aspect-square rounded-lg bg-pink-500" />
              <figure className="col-start-3 col-end-5 rounded-lg bg-purple-500" />
              <figure className="col-start-3 col-end-4 row-start-2 row-end-3 rounded-lg bg-orange-500" />
              <figure className="col-start-4 col-end-5 rounded-lg bg-yellow-500" />
            </div>
          </Wrapper>
        </header>
        <main className="p-2">
          <Wrapper className="my-4 rounded-md bg-white lg:py-8">
            <div className="">
              <div className="flex w-full items-center justify-between">
                <div className="flex w-full items-center justify-start">
                  <GoBack />
                </div>
                <div className="w-full text-right">
                  <p className="inline-block rounded-md p-3 text-sm font-bold uppercase text-muted-foreground lg:text-2xl">
                    1,350$ / Night
                  </p>
                </div>
              </div>
              <div className="">Description</div>
            </div>
          </Wrapper>
        </main>
      </>
    </SiteWrapper>
  );
}
