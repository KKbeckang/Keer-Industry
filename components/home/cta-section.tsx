import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          需要专业的选型建议？
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
          我们的技术工程师随时准备为您解答疑问，提供定制化的测量解决方案与报价。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-neutral-900 font-bold" asChild>
            <Link href="/contact">立即询价</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
            <Link href="/support">下载产品手册</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
