import { VendorCard } from "@/components/vendors/VendorCard";
import type { Vendor } from "@/types";

type VendorGridProps = {
  vendors: Vendor[];
  columns?: 3 | 4;
};

const columnClasses = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

export function VendorGrid({ vendors, columns = 4 }: VendorGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-4 sm:gap-5 ${columnClasses[columns]}`}>
      {vendors.map((vendor, index) => (
        <VendorCard key={vendor.id} vendor={vendor} priority={index < 4} />
      ))}
    </div>
  );
}
