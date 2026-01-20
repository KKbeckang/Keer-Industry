import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductSidebar } from "@/components/products/product-sidebar";
import { ProductCard } from "@/components/products/product-card";
import { getAllCategories, getItemsByCategory, getCategoryById } from "@/data/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    category: string;
  };
}

// Generate static params for all categories + services page
export async function generateStaticParams() {
  const categories = getAllCategories();
  return [
    ...categories.map((cat) => ({ category: cat.id })),
    { category: "services" }
  ];
}

export default function CategoryPage({ params }: PageProps) {
  const { category: categoryId } = params;
  const categories = getAllCategories();
  
  // Handle "services" as a special category case
  const isServices = categoryId === "services";
  
  let categoryName = "";
  let categoryDesc = "";
  
  if (isServices) {
    categoryName = "技术服务与解决方案";
    categoryDesc = "租赁、测试、改装升级、维修快修与样机特价处理。";
  } else {
    const categoryData = getCategoryById(categoryId);
    if (!categoryData) {
      return notFound();
    }
    categoryName = categoryData.name_zh;
    categoryDesc = categoryData.description;
  }

  const items = getItemsByCategory(categoryId);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl font-bold text-neutral-900">{categoryName}</h1>
          <p className="mt-2 text-neutral-500 max-w-3xl">
            {categoryDesc}
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
             <div className="sticky top-24">
                <ProductSidebar categories={categories} activeCategoryId={categoryId} />
             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <ProductCard 
                    key={item.id} 
                    item={item} 
                    type={(item as any).sku ? 'product' : 'service'} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-neutral-500 bg-white rounded-lg border border-neutral-200">
                暂无相关产品数据
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
