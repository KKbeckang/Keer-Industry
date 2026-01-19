import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

// Mock Data
const categories = [
  {
    title: "能耗与电能质量监测",
    description: "帮助工程师实时监测工厂与建筑的能耗状况，分析电能质量问题。",
    count: "5 个系列",
    image: "bg-neutral-200", 
    href: "/products/power-monitoring",
  },
  {
    title: "用电检查与反窃电检测",
    description: "专为电力稽查设计，快速识别异常用电行为，准确定位窃电点。",
    count: "3 个系列",
    image: "bg-neutral-300",
    href: "/products/inspection",
  },
  {
    title: "高压安全测量",
    description: "采用先进的光电隔离技术，确保在高压环境下进行安全精准的带电测试。",
    count: "4 个系列",
    image: "bg-neutral-200",
    href: "/products/hv-safe",
  },
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-2">产品中心</Badge>
            <h2 className="text-3xl font-bold text-neutral-900">探索我们的产品线</h2>
          </div>
          <Link href="/products" className="hidden md:flex items-center text-primary font-medium hover:underline">
            查看所有产品 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group">
              <Card className="h-full overflow-hidden border-neutral-200 hover:border-primary transition-colors duration-300">
                <div className={`h-48 ${cat.image} flex items-center justify-center text-neutral-400 group-hover:scale-105 transition-transform duration-500`}>
                   {/* Image Placeholder */}
                   <span className="text-sm">Product Image</span>
                </div>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {cat.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                    {cat.count}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/products" className="inline-flex items-center text-primary font-medium hover:underline">
            查看所有产品 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
