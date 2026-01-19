import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

// Mock Data
const categories = [
  {
    title: "工业传感器",
    description: "压力、温度、流量传感器，适用于过程控制。",
    count: "12 个系列",
    image: "bg-neutral-200", // Placeholder for actual image
    href: "/products/sensors",
  },
  {
    title: "电力测量仪器",
    description: "万用表、钳形表、功率分析仪。",
    count: "8 个系列",
    image: "bg-neutral-300",
    href: "/products/measurement",
  },
  {
    title: "环境测试设备",
    description: "温湿度计、风速仪、粒子计数器。",
    count: "5 个系列",
    image: "bg-neutral-200",
    href: "/products/environmental",
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
