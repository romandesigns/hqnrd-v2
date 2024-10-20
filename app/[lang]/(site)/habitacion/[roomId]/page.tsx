export default async function Room({
  params: { roomId },
}: {
  params: { roomId: string };
}) {
  console.log(roomId);
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1>Habitacion Page unit #{roomId}</h1>
      </main>
    </div>
  );
}
