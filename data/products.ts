// Type Definition
export interface Category {
  id: string;
  name_zh: string;          // Chinese Name
  name_en: string;          // English Name
  tagline_zh: string;       // Chinese Tagline
  tagline_en: string;       // English Tagline
  description: string;      // Backwards compatibility (mapped from tagline_zh)
  hero_tags_zh: string[];   // Hero tags
  order: number;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categoryName: string;
  description: string;
  fullDescription: string;
  features: string[];
  images: string[];
  specs: Record<string, string>;
  downloads: {
    title: string;
    url: string;
    type: "PDF" | "CAD" | "ZIP";
  }[];
  isNew?: boolean;
  isHot?: boolean;
}

// Categories Data
export const categories: Category[] = [
  {
    id: "power-monitoring",
    name_zh: "能耗与电能质量监测",
    name_en: "Energy & Power Monitoring",
    tagline_zh: "面向配电与设备运行的电参量监测、能耗统计与谐波分析。",
    tagline_en: "Power parameters, energy metering and harmonic analysis.",
    description: "面向配电与设备运行的电参量监测、能耗统计与谐波分析。",
    order: 10,
    hero_tags_zh: ["谐波分析", "能耗统计", "现场诊断"]
  },
  {
    id: "inspection-anti-theft",
    name_zh: "用电检查与反窃电检测",
    name_en: "Inspection & Anti-theft Measurement",
    tagline_zh: "用于现场巡检、计量装置测试与异常用电排查。",
    tagline_en: "Field inspection and metering device testing.",
    description: "用于现场巡检、计量装置测试与异常用电排查。",
    order: 20,
    hero_tags_zh: ["现场巡检", "计量检测", "异常排查"]
  },
  {
    id: "hv-optical-isolation",
    name_zh: "高压安全测量（光电隔离技术）",
    name_en: "High-Voltage Safe Measurement (Optical Isolation)",
    tagline_zh: "支持带电测试作业，突出光电隔离的人身安全与测量可信度。",
    tagline_en: "Live-line HV measurement enabled by optical isolation.",
    description: "支持带电测试作业，突出光电隔离的人身安全与测量可信度。",
    order: 30,
    hero_tags_zh: ["光电隔离", "带电测试", "高压测量"]
  },
  {
    id: "fault-ndt",
    name_zh: "故障定位与无损检测",
    name_en: "Fault Detection & Non-Destructive Testing",
    tagline_zh: "面向电力设备隐患排查、故障探测与电缆寻踪定位。",
    tagline_en: "Fault localization, thermal inspection and cable tracing.",
    description: "面向电力设备隐患排查、故障探测与电缆寻踪定位。",
    order: 40,
    hero_tags_zh: ["故障探测", "热成像", "电缆寻踪"]
  },
  {
    id: "services",
    name_zh: "技术服务与解决方案",
    name_en: "Services & Solutions",
    tagline_zh: "租赁、测试、改装升级、维修快修与样机特价处理。",
    tagline_en: "Rental, testing, retrofit/upgrade and repair services.",
    description: "租赁、测试、改装升级、维修快修与样机特价处理。",
    order: 50,
    hero_tags_zh: ["租赁", "维修快修", "升级改造"]
  }
];

// Products Data (Sampled & Mapped)
export const products: Product[] = [
  // 1. Energy & Power Monitoring
  {
    id: "pm-001",
    slug: "kp-3000-power-analyzer",
    name: "KP-3000 三相功率分析仪",
    categoryId: "power-monitoring",
    categoryName: "能耗与电能质量监测",
    description: "用于能效分析和电能质量监测的高精度仪器。",
    fullDescription: "KP-3000 提供全面的电力参数测量，包括电压、电流、功率、功率因数、谐波等。是电机测试、变频器效率评估及新能源领域的理想选择。",
    features: [
      "0.05% 功率测量精度",
      "带宽 DC, 0.5Hz ~ 100kHz",
      "50次谐波分析",
      "7英寸彩色触摸屏",
    ],
    images: ["/images/placeholder-analyzer.jpg"],
    specs: {
      "电压输入": "1000V rms",
      "电流输入": "50A rms (直接输入)",
      "采样率": "200 kS/s",
      "通道数": "3V / 3A",
    },
    downloads: [],
  },

  // 2. Inspection & Anti-theft
  {
    id: "ins-001",
    slug: "ki-500-inspection-tool",
    name: "KI-500 用电稽查仪",
    categoryId: "inspection-anti-theft",
    categoryName: "用电检查与反窃电检测",
    description: "手持式多功能用电检查终端，支持多种窃电模式识别。",
    fullDescription: "KI-500 专为反窃电工作设计，能够实时分析计量回路的电压、电流、相位及波形，内置多种窃电模型算法，自动报警异常情况。",
    features: [
      "自动识别接线错误",
      "向量图实时显示",
      "大容量数据存储",
      "支持无线数据上传",
    ],
    images: [],
    specs: {
      "电压量程": "0-480V",
      "电流量程": "0-10A (钳形互感器)",
      "相位测量精度": "0.1°",
      "工作时间": ">8小时",
    },
    downloads: [],
    isHot: true,
  },

  // 3. High-Voltage Safe Measurement
  {
    id: "hv-001",
    slug: "khv-2000-optical-probe",
    name: "KHV-2000 光电隔离高压探头",
    categoryId: "hv-optical-isolation",
    categoryName: "高压安全测量",
    description: "利用光纤传输信号，实现高低压完全隔离。",
    fullDescription: "KHV-2000 采用光纤传输技术，将高压侧的测量信号通过光纤传输至低压侧显示仪表，彻底解决了高压测量的绝缘与干扰问题，保障操作人员绝对安全。",
    features: [
      "绝缘等级 110kV",
      "抗强电磁干扰",
      "光纤传输距离可达 100m",
      "电池供电，方便携带",
    ],
    images: [],
    specs: {
      "测量电压": "0-35kV AC",
      "频率响应": "10Hz - 1kHz",
      "传输方式": "光纤",
      "隔离耐压": "100kV/1min",
    },
    downloads: [],
    isNew: true,
  },

  // 4. Fault Detection
  {
    id: "fd-001",
    slug: "kfd-800-cable-locator",
    name: "KFD-800 智能电缆故障定位仪",
    categoryId: "fault-ndt",
    categoryName: "故障定位与无损检测",
    description: "集测距、定点、路径探测于一体的综合电缆故障测试系统。",
    fullDescription: "KFD-800 采用多次脉冲法技术，自动分析故障距离，配合高灵敏度定点仪，可快速精确定位高阻、低阻及闪络性故障。",
    features: [
      "多次脉冲法技术",
      "12英寸高亮触摸屏",
      "自动测距功能",
      "高能高压发生器配合",
    ],
    images: [],
    specs: {
      "测试距离": "30km",
      "定位精度": "±0.2m",
      "输出电压": "32kV (冲击)",
      "供电方式": "内置锂电池/AC220V",
    },
    downloads: [],
  },
  
  // Reuse some existing mock data assigned to new categories if fit, otherwise keep as filler or remove
  {
    id: "m-001",
    slug: "km-800-multimeter",
    name: "KM-800 工业级真有效值万用表",
    categoryId: "services", // Temporarily assigned here or move to a general category if needed
    categoryName: "技术服务与解决方案", // Or create a "General Instruments" category
    description: "坚固耐用，IP67 防护，专为恶劣工业现场设计。",
    fullDescription: "KM-800 旨在设定恶劣环境下使用的工业万用表新标准。具有 IP67 防水防尘等级，和 3 米跌落测试。",
    features: ["真有效值", "IP67 防水", "3米防跌落"],
    images: ["/images/placeholder-multimeter.jpg"],
    specs: { "DC 电压": "1000V" },
    downloads: [],
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getAllCategories(): Category[] {
  return categories.sort((a, b) => a.order - b.order);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

