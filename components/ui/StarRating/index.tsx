import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

  return (
    <span className="flex -translate-y-1 items-start justify-center">
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
