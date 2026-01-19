import Link from "next/link";
import { Search, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
            <span>KEER</span>
            <span className="text-neutral-900">INDUSTRY</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          <Link href="/" className="hover:text-primary transition-colors">
            首页
          </Link>
          <Link href="/products" className="hover:text-primary transition-colors">
            产品中心
          </Link>
          <Link href="/solutions" className="hover:text-primary transition-colors">
            解决方案
          </Link>
          <Link href="/support" className="hover:text-primary transition-colors">
            服务支持
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            关于我们
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            联系我们
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative w-64">
            <Input 
              placeholder="搜索产品或型号..." 
              className="pr-8 h-9 text-xs bg-neutral-50" 
            />
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-neutral-400" />
          </div>
          
          <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-primary">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Switch Language</span>
          </Button>

          {/* Mobile Menu Toggle (Simplified for now) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
