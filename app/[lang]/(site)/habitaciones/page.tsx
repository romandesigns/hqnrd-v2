import { RoomCard } from "@/components/ui";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { data } from "@/public/assets/data";

export default async function Page({
  params: {
    lang,
    searchParams: { categoria },
  },
}: {
  params: { lang: Locale; searchParams: { categoria: string } };
}) {
  const {
    site: { component },
  } = await getDictionary(lang);

  const filteredRooms = component.page.rooms.roomsList.filter(
    (room) => room.slug === categoria,
  );

  console.log(filteredRooms);

  return (
    <ul className="grid grid-flow-row grid-cols-1 grid-rows-4 gap-4 gap-y-10 rounded-md p-2 sm:grid-cols-2 lg:grid-cols-3">
      {component.page.rooms.roomsList.map((room) => (
        <li key={room.id}>
          <RoomCard imgSrc={data.home.header.room[0]} {...room} />
        </li>
      ))}
    </ul>
  );
}
