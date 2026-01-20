import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "工业级可靠性",
    description: "经过严苛环境测试，确保在高温、高湿及强电磁干扰环境下依然稳定运行。",
  },
  {
    icon: Activity,
    title: "极致精准",
    description: "采用顶级传感器与校准技术，为研发与质检提供最值得信赖的数据支持。",
  },
  {
    icon: Zap,
    title: "高效响应",
    description: "专业技术团队 24 小时响应，提供从选型咨询到售后维修的全生命周期服务。",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-neutral-900">为什么选择 KEER</h2>
          <p className="text-neutral-600">我们深知工业现场的挑战，因此专注于产品的耐用性与精准度。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
