import { clsx } from "@/utils/clsx";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  classNames?: string;
}

export function StarRating({ rating, classNames }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span
      className={clsx(
        `flex -translate-y-1 items-start justify-center text-secondary-highlight`,
        classNames,
      )}
    >
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
    </span>
  );
}
