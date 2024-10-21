import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";

export default function Playground() {
  async function getName(formData: FormData) {
    "use server";
    const name = formData.get("name");
    console.log(name);
  }
  return (
    <main className="flex h-screen items-center justify-center border border-red-500 bg-neutral-100 p-4">
      <form action={getName} className="flex items-center justify-start gap-2">
        <Input type="text" name="name" value="Roman" className="hidden" />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
