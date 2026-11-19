import { Star } from "lucide-react";

type RatingBadgeProps = {
  rating: number;
  reviewCount?: number;
};

export function RatingBadge({ rating, reviewCount }: RatingBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold text-ink"
      aria-label={`Rating ${rating.toFixed(1)} dari 5${
        reviewCount ? `, ${reviewCount} ulasan` : ""
      }`}
    >
      <Star
        aria-hidden="true"
        className="h-4 w-4 fill-accent text-accent"
        strokeWidth={1.5}
      />
      {rating.toFixed(1)}
      {reviewCount ? (
        <span className="font-normal text-muted">({reviewCount})</span>
      ) : null}
    </span>
  );
}
