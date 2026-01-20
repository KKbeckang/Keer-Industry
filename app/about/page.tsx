import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Ruler, ClipboardCheck, Zap, Server, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="bg-neutral-900 text-white py-24 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-block px-3 py-1 rounded-sm bg-secondary text-secondary-foreground text-xs font-bold tracking-wider uppercase mb-2">
                About Keer Industry
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                面向国家标准的专用测试仪器
              </h1>
              <h2 className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide">
                Specialized Instruments Built for National Standards
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mt-8">
                KEER 不做通用仪表，而是专注于标准驱动的测试方案。我们覆盖多类标准化现场测试场景（可按行业与电压等级定制），
                为工程师提供符合合规要求、安全可靠的测量工具。
              </p>
            </div>
          </div>
          {/* Abstract background element */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/10 -skew-x-12 hidden lg:block" />
        </section>

        {/* 2. Why Specialized Comparison */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
              <h2 className="text-3xl font-bold text-neutral-900">为什么需要专用测试仪器？</h2>
              <p className="text-sm text-neutral-500 uppercase tracking-widest">Why Specialized</p>
              <p className="text-neutral-600 mt-4">
                通用仪表无法满足严苛的现场合规测试需求。KEER 专为解决这一痛点而生。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Generic Card */}
              <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Ruler className="w-24 h-24 text-neutral-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-500 mb-6">通用仪表 (Generic Instruments)</h3>
                <ul className="space-y-4 text-neutral-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>功能宽泛，缺乏针对特定国家标准的测试逻辑。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>在高压带电环境下往往存在绝缘与安全隐患。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>数据记录需人工干预，难以形成可追溯的审计报告。</span>
                  </li>
                </ul>
              </div>

              {/* KEER Card */}
              <div className="bg-white p-8 rounded-lg border-t-4 border-primary shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck className="w-24 h-24 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-6">KEER 专用仪器</h3>
                <ul className="space-y-4 text-neutral-800 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-neutral-900">标准驱动 (Spec-Driven):</strong> 严格依据国标/行标设计测试流程。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-neutral-900">现场就绪 (Field-Ready):</strong> 专为复杂电磁环境与高压现场打造。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong className="text-neutral-900">光电隔离:</strong> 核心技术实现真正的“人与电隔离”，确保绝对安全。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Three Core Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Ruler,
                  title: "标准适配",
                  en: "Spec-Driven Design",
                  desc: "我们的每一款产品都对应特定的国家或行业测试标准。不再是“能测”，而是“合规测”。"
                },
                {
                  icon: Zap,
                  title: "现场可用",
                  en: "Field-Ready Safety",
                  desc: "无论是 10kV 还是更高的电压等级，我们的设备都经过严苛的抗干扰与绝缘设计，适应真实一线环境。"
                },
                {
                  icon: ClipboardCheck,
                  title: "结果可验收",
                  en: "Audit-Ready Data",
                  desc: "自动化的数据采集与防篡改记录功能，确保每一次测试结果都能成为可信的验收依据。"
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow bg-neutral-50/50">
                  <CardHeader>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider">{item.en}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Technology */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-2">核心技术：光电隔离带电测试</h2>
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-8">Optical Isolation Technology</p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    在高压测试领域，安全是底线。KEER 采用先进的<span className="text-white font-bold">光电隔离技术</span>，
                    将高压侧的模拟信号转化为光信号传输至低压侧仪表。
                  </p>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    这不仅彻底切断了电气连接，实现了真正的<span className="text-secondary">“人与电隔离”</span>，
                    还有效屏蔽了现场复杂的电磁干扰，确保了数据的极致稳定与精准。
                  </p>
                </div>
                <div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                  {/* Schematic Placeholder */}
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="p-4 bg-red-900/50 border border-red-500/30 rounded text-red-200 text-sm">高压侧采集</div>
                      <div className="h-px w-16 bg-gradient-to-r from-red-500 to-blue-500 relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-neutral-400">光纤传输</span>
                      </div>
                      <div className="p-4 bg-blue-900/50 border border-blue-500/30 rounded text-blue-200 text-sm">低压侧处理</div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">Optical Isolation Diagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Quality & R&D */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-2 text-neutral-900">毫不妥协的高品质</h2>
                <p className="text-sm text-neutral-500 uppercase tracking-widest">Uncompromising Quality</p>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  我们的研发团队深知，实验室里的完美数据并不代表现场的稳定表现。因此，KEER 的每一款产品在量产前，
                  都必须经历长时间的现场实地测试。我们追求在极端温湿度、强震动、强干扰环境下的长期稳定性。
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-2xl font-bold text-neutral-900">Spec-Based</div>
                    <div className="text-sm text-neutral-500">基于标准研发</div>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <div className="text-2xl font-bold text-neutral-900">Rugged</div>
                    <div className="text-sm text-neutral-500">坚固耐用设计</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Services & Partnership */}
        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-2 text-neutral-900">技术服务与合作伙伴</h2>
              <p className="text-sm text-neutral-500 uppercase tracking-widest">Services & Partnership</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "定期校准", icon: Server },
                { title: "升级改造", icon: Wrench },
                { title: "维修快修", icon: Zap },
                { title: "租赁服务", icon: ClipboardCheck },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-neutral-900">{s.title}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-neutral-600 mt-12 max-w-2xl mx-auto">
              KEER 不仅仅是设备供应商，更是您长期的技术合作伙伴。我们提供全生命周期的技术支持，确保您的投资持续产生价值。
            </p>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              准备好升级您的现场测试方案了吗？
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              联系我们的技术专家，探讨如何通过专用仪器提升合规性与安全性。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="text-neutral-900 font-bold" asChild>
                <Link href="/contact">联系我们</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/products/services">查看技术服务</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
