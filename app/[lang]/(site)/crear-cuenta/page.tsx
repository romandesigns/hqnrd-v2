import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1>Crear cuenta</h1>
        <Card>
          <form className="flex w-full flex-col gap-4">
            <Input placeholder="Nombre" />
            <Input placeholder="Correo electrónico" />
            <Input placeholder="Contraseña" />
            <Input placeholder="Confirmar contraseña" />
            <Button>Crear cuenta</Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
