import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductSidebar } from "@/components/products/product-sidebar";
import { ProductCard } from "@/components/products/product-card";
import { getAllCategories, getAllItems } from "@/data/products";

export default function ProductsPage() {
  const categories = getAllCategories();
  const allItems = getAllItems();

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl font-bold text-neutral-900">产品与服务中心</h1>
          <p className="mt-2 text-neutral-500">
            全方位的工业测量解决方案，从高精度仪器到专业技术服务
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
             <div className="sticky top-24">
                <ProductSidebar categories={categories} />
             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allItems.map((item) => (
                <ProductCard 
                  key={item.id} 
                  item={item} 
                  type={(item as any).sku ? 'product' : 'service'} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
