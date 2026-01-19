import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/data/products";

interface ProductSidebarProps {
  categories: Category[];
  activeCategoryId?: string;
  className?: string;
}

export function ProductSidebar({ categories, activeCategoryId, className }: ProductSidebarProps) {
  return (
    <nav className={cn("space-y-1", className)}>
      <div className="pb-4 mb-4 border-b border-neutral-200">
        <h3 className="font-semibold text-neutral-900 px-3">产品分类</h3>
      </div>
      
      <div className="space-y-1">
        <Link
          href="/products"
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            !activeCategoryId 
              ? "bg-primary/10 text-primary" 
              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
          )}
        >
          全部产品
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.id}`}
            className={cn(
              "flex flex-col px-3 py-2 rounded-md transition-colors",
              activeCategoryId === category.id
                ? "bg-primary/10 text-primary"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            )}
          >
            <span className="text-sm font-medium">{category.name_zh}</span>
            <span className="text-xs opacity-70 truncate">{category.name_en}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
