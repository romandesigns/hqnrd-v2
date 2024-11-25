import { amenities } from "@/public/assets/data/amenities";
import { Heading } from ".";

export function Amenities() {
  return (
    <div className="rounded-md border p-2">
      <Heading text="Amenities" />
      <ul className="my-3 grid w-full grid-cols-2 gap-6 rounded-md p-2 py-4 sm:grid-cols-5">
        {amenities.map((amenity, idx) => (
          <li key={idx} className="flex items-center justify-start">
            <span className="order-2 text-[.8rem]">{amenity.label}</span>
            <span className="order-1 mr-1 h-5 w-5">
              <amenity.Icon size={18} className="text-muted-foreground" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
