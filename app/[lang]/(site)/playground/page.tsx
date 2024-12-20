import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Bear } from "./Bear";

export default function Page() {
  async function getName(formData: FormData) {
    "use server";
    const name = formData.get("name");
    console.log(name);
  }
  return (
    <main className="flex h-screen items-center justify-center border border-red-500 bg-neutral-100 p-4">
      <Bear />
      <div className="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-4">
        <div>
          <div className="border-gray-850 relative rounded-xl border shadow-2xl">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="via-pink-550 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <p className="dark:text-pink-540 mb-2 text-2xl font-bold text-pink-500 md:text-3xl lg:text-4xl">
                20+
              </p>
              <p className="mb-0 leading-5">Years of experience</p>
            </div>
          </div>
        </div>
        <div>
          <div className="border-gray-850 relative rounded-xl border shadow-2xl">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <p className="mb-2 text-2xl font-bold text-orange-400 md:text-3xl lg:text-4xl">
                50
              </p>
              <p className="mb-0 leading-5">Coding courses</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
