import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">KEER INDUSTRY</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              专注于为工业领域提供高精度、高可靠性的测量与测试设备。致力成为工程师最信赖的合作伙伴。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-secondary transition-colors">产品中心</Link></li>
              <li><Link href="/solutions" className="hover:text-secondary transition-colors">解决方案</Link></li>
              <li><Link href="/support" className="hover:text-secondary transition-colors">技术支持</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">关于我们</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>中国上海市浦东新区<br />某某工业园区 888 号</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+86 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>sales@keer-industry.com</span>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">关注我们</h4>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="h-10 w-10 bg-neutral-800 rounded flex items-center justify-center hover:bg-secondary hover:text-neutral-900 transition-colors cursor-pointer">
                WC
              </div>
              <div className="h-10 w-10 bg-neutral-800 rounded flex items-center justify-center hover:bg-secondary hover:text-neutral-900 transition-colors cursor-pointer">
                LN
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-xs text-center text-neutral-500">
          <p>© {new Date().getFullYear()} Keer Industry. All rights reserved. 沪ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
