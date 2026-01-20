import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product, Service } from "@/data/products";

interface ProductCardProps {
  item: Product | Service;
  type: "product" | "service";
}

export function ProductCard({ item, type }: ProductCardProps) {
  const isProduct = type === "product";
  const href = `/products/${isProduct ? item.categoryId : 'services'}/${isProduct ? (item as Product).slug : item.id}`;
  
  // Type guard helpers
  const getTags = () => (isProduct ? (item as Product).tags_zh : (item as Service).tags_zh) || [];
  const getDescription = () => isProduct ? (item as Product).short_zh : (item as Service).short_zh;
  const getTitle = () => isProduct ? (item as Product).name_zh : (item as Service).name_zh;
  const getSubTitle = () => isProduct ? (item as Product).sku : (item as Service).name_en;

  return (
    <Link href={href} className="group h-full">
      <Card className="h-full overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg border-neutral-200">
        <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden flex items-center justify-center">
          {/* Placeholder for image */}
          <div className="text-neutral-300 font-medium">
             {isProduct ? 'Product Image' : 'Service Image'}
          </div>
          
          {/* Tags Overlay */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {getTags().slice(0, 2).map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <CardContent className="flex-1 p-4 space-y-2">
          <div className="text-xs text-neutral-500 font-mono">{getSubTitle()}</div>
          <h3 className="font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2">
            {getTitle()}
          </h3>
          <p className="text-sm text-neutral-500 line-clamp-2">
            {getDescription()}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:underline">
            {isProduct ? '查看详情' : (item as Service).cta_zh} 
            <span aria-hidden="true">&rarr;</span>
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
