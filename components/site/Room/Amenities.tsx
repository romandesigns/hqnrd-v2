import { amenities } from "@/public/assets/data/amenities";

export function Amenities() {
  return (
    <div className="py-4">
      <h3 className="text-lg font-bold">Amenities</h3>
      <ul className="my-3 grid w-full grid-cols-2 gap-4 rounded-md sm:grid-cols-5 lg:gap-6">
        {amenities.map((amenity, idx) => (
          <li key={idx} className="flex items-center justify-start">
            <span className="order-2 text-[.8rem]">{amenity.label}</span>
            <span className="order-1 mr-1 h-5 w-5">
              <amenity.Icon size={18} color="#333333" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
