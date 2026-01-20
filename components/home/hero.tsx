import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Overlay / Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800/50 z-0">
        {/* In real production, put an <img> or <Image> here with object-cover */}
        <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="inline-block px-3 py-1 rounded-sm bg-secondary text-secondary-foreground text-xs font-bold tracking-wider uppercase">
            Professional & Reliable
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            工业级精准测量 <br />
            <span className="text-secondary">工程师的首选伙伴</span>
          </h1>
          <p className="text-lg text-neutral-300 md:text-xl leading-relaxed max-w-xl">
            提供从实验室到生产现场的全套测试测量解决方案。
            高精度、高耐用性，确保每一次数据的真实可靠。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base" asChild>
              <Link href="/products">
                浏览产品中心
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent text-white border-white hover:bg-white hover:text-neutral-900" asChild>
              <Link href="/contact">
                联系销售专家
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
