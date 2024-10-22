import { FiInbox } from "@/components/icons";
import { RoomCard } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { formatLabel } from "@/lib/utils";
import { data } from "@/public/assets/data";
import { clsx } from "@/utils/clsx";
import { useHtmlParser } from "@/utils/useHtmlParser";

interface PageProps {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ categoria: string }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { lang } = await params;
  const { categoria } = await searchParams;

  const {
    site: { component },
  } = await getDictionary(lang);

  const rooms = categoria
    ? component.page.rooms.roomsList.filter((room) => room.slug === categoria)
    : component.page.rooms.roomsList;

  const EmptyBox = () => {
    return (
      <article className="p-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-primary-foreground py-8">
          <h2 className="text-sm uppercase">Rooms {categoria} don't exist!</h2>
          <FiInbox size={40} />
        </div>
      </article>
    );
  };

  return rooms.length ? (
    <>
      <div className="pb-20 pt-2">
        <p className="text-center text-[.9rem] font-medium [&_span]:inline-flex [&_span]:rounded-full [&_span]:bg-accent-foreground [&_span]:px-4 [&_span]:text-primary-foreground">
          {categoria
            ? useHtmlParser(
                `Showing <span>${rooms.length}</span> ${formatLabel(categoria)} rooms`,
              )
            : "Showing all rooms"}
        </p>
      </div>
      <ul
        className={clsx(
          `grid grid-flow-row grid-cols-1 grid-rows-1 gap-4 gap-y-10 rounded-md p-2 sm:grid-cols-2 lg:grid-cols-3`,
          rooms.length === 0 && "grid-cols-1 grid-rows-1",
        )}
      >
        {rooms.map((room) => (
          <li key={room.id}>
            <RoomCard imgSrc={data.home.header.room[0]} {...room} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <EmptyBox />
  );
}
