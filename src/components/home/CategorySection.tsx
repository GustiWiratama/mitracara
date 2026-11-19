import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageContainer } from "@/components/ui/PageContainer";

export function CategorySection() {
  return (
    <section
      id="categories"
      className="scroll-mt-20 border-b border-line bg-white"
    >
      <PageContainer className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="JELAJAHI KATEGORI"
          title="Temukan Berdasarkan Kategori"
          description="Lima kategori kebutuhan acara yang tersedia di MITRACARA. Pilih kategori untuk melihat vendor yang relevan."
        />
        <div className="mt-8">
          <CategoryGrid />
        </div>
      </PageContainer>
    </section>
  );
}
