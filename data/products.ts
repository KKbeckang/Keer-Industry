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

export interface Service {
  id: string;
  name_zh: string;
  name_en: string;
  short_zh: string;
  cta_zh: string;
  categoryId: string;
  tags_zh: string[];
  sort: number;
}

export interface Product {
  id: string;
  sku: string;
  name_zh: string; // Mapped to name
  name_en: string;
  categoryId: string; // Mapped from category_id
  categoryName: string; // Derived
  short_zh: string; // Mapped to description
  fullDescription: string; // Placeholder or extended
  highlights_zh: string[]; // Mapped to features
  tags_zh: string[];
  image: {
    cover: string | null;
    gallery: string[];
  };
  specs_summary: Record<string, string | null | undefined>;
  downloads: {
    title: string;
    url: string;
    type: "PDF" | "CAD" | "ZIP";
  }[];
  status: "active" | "inactive";
  sort: number;
  
  // Computed/Legacy fields for compatibility
  slug: string;
  name: string;
  description: string;
  features: string[];
  images: string[];
  specs: Record<string, string>;
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

// Service Data
export const services: Service[] = [
  {
    id: "rental",
    name_zh: "仪器仪表租赁",
    name_en: "Instrument Rental",
    short_zh: "承接以上仪器仪表租赁服务。",
    cta_zh: "咨询租赁",
    categoryId: "services",
    tags_zh: ["租赁", "灵活使用"],
    sort: 10
  },
  {
    id: "raw-data-testing",
    name_zh: "原始数据测试项目",
    name_en: "Raw Data Testing",
    short_zh: "承接以上仪器仪表原始数据测试项目。",
    cta_zh: "咨询测试项目",
    categoryId: "services",
    tags_zh: ["测试", "数据服务"],
    sort: 20
  },
  {
    id: "retrofit-upgrade",
    name_zh: "改装升级与配件支持",
    name_en: "Retrofit & Upgrade",
    short_zh: "承接同类仪器仪表及配件改装升级。",
    cta_zh: "咨询升级方案",
    categoryId: "services",
    tags_zh: ["升级", "改造"],
    sort: 30
  },
  {
    id: "repair",
    name_zh: "电测仪表维修（快修）",
    name_en: "Fast Repair Service",
    short_zh: "承接各类电测仪表维修与快修服务。",
    cta_zh: "申请维修",
    categoryId: "services",
    tags_zh: ["维修", "快修"],
    sort: 40
  },
  {
    id: "prototype-sale",
    name_zh: "实验样机处理（特价）",
    name_en: "Prototype Clearance (Special Offer)",
    short_zh: "实验样机特价处理（以库存为准）。",
    cta_zh: "查看特价",
    categoryId: "services",
    tags_zh: ["特价", "样机"],
    sort: 50
  }
];

// Raw Product Data from JSON
const rawProducts = [
  {
    "id": "keer-306a",
    "sku": "KEER-306A",
    "name_zh": "三相电力参数测试仪",
    "name_en": "Three-Phase Power Parameter Tester",
    "category_id": "power-monitoring",
    "short_zh": "用于三相电力参数的现场测试与记录。",
    "highlights_zh": ["三相测量", "现场测试", "参数记录"],
    "tags_zh": ["电参量", "能耗监测"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 10
  },
  {
    "id": "keer-306b",
    "sku": "KEER-306B",
    "name_zh": "三相节电监测仪",
    "name_en": "Three-Phase Energy-Saving Monitor",
    "category_id": "power-monitoring",
    "short_zh": "用于三相用电与节电效果的监测与评估。",
    "highlights_zh": ["节电监测", "三相测量", "现场评估"],
    "tags_zh": ["节电", "能耗监测"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 20
  },
  {
    "id": "keer-306c",
    "sku": "KEER-306C",
    "name_zh": "三相电力能耗监测仪",
    "name_en": "Three-Phase Energy Consumption Monitor",
    "category_id": "power-monitoring",
    "short_zh": "用于三相能耗数据的监测、记录与分析。",
    "highlights_zh": ["能耗统计", "数据记录", "趋势分析"],
    "tags_zh": ["能耗", "监测"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 30
  },

  {
    "id": "keer-6510",
    "sku": "KEER-6510",
    "name_zh": "电力计量装置现场测试仪（单相）",
    "name_en": "On-site Metering Device Tester (Single-Phase)",
    "category_id": "inspection-anti-theft",
    "short_zh": "用于单相电力计量装置的现场测试与核查。",
    "highlights_zh": ["单相测试", "现场核查", "计量检测"],
    "tags_zh": ["用电检查", "计量"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 110
  },
  {
    "id": "keer-6511",
    "sku": "KEER-6511",
    "name_zh": "电力计量装置现场测试仪（单相）",
    "name_en": "On-site Metering Device Tester (Single-Phase)",
    "category_id": "inspection-anti-theft",
    "short_zh": "用于单相电力计量装置的现场测试与核查。",
    "highlights_zh": ["单相测试", "现场核查", "计量检测"],
    "tags_zh": ["用电检查", "计量"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 120
  },
  {
    "id": "keer-311a",
    "sku": "KEER-311A",
    "name_zh": "三相电能表现场测试仪（三相）",
    "name_en": "Three-Phase Energy Meter Field Tester",
    "category_id": "inspection-anti-theft",
    "short_zh": "用于三相电能表与计量回路的现场测试。",
    "highlights_zh": ["三相测试", "现场检测", "计量核查"],
    "tags_zh": ["电能表", "用电检查"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 130
  },
  {
    "id": "keer-312a",
    "sku": "KEER-312A",
    "name_zh": "三相全功能用电检查仪（三相）",
    "name_en": "Three-Phase Full-Function Power Inspection Instrument",
    "category_id": "inspection-anti-theft",
    "short_zh": "用于三相用电现场检查与异常排查。",
    "highlights_zh": ["全功能检查", "三相测量", "异常排查"],
    "tags_zh": ["用电检查", "巡检"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 140
  },
  {
    "id": "keer-313a",
    "sku": "KEER-313A",
    "name_zh": "三相全功能查窃电仪（三相）",
    "name_en": "Three-Phase Anti-theft Detection Instrument",
    "category_id": "inspection-anti-theft",
    "short_zh": "用于三相现场查窃电与异常用电检测。",
    "highlights_zh": ["查窃电", "异常检测", "三相巡检"],
    "tags_zh": ["反窃电", "用电检查"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "100/220/380/1140/6600V(可选)", "current_range": "5/200/500A(可选)" },
    "downloads": [],
    "status": "active",
    "sort": 150
  },

  {
    "id": "keer-pt03v-10kv",
    "sku": "KEER-PT03V/10KV",
    "name_zh": "高压电压互感器现场测试仪（光电隔离）",
    "name_en": "HV Voltage Transformer Field Tester (Optical Isolation)",
    "category_id": "hv-optical-isolation",
    "short_zh": "光电隔离方案，面向10kV高压电压互感器现场测试。",
    "highlights_zh": ["光电隔离", "带电测试", "10kV场景"],
    "tags_zh": ["光电隔离", "高压测量"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 210
  },
  {
    "id": "keer-ct03a-10kv",
    "sku": "KEER-CT03A/10KV",
    "name_zh": "高压电流互感器现场测试仪（光电隔离）",
    "name_en": "HV Current Transformer Field Tester (Optical Isolation)",
    "category_id": "hv-optical-isolation",
    "short_zh": "光电隔离方案，面向10kV高压电流互感器现场测试。",
    "highlights_zh": ["光电隔离", "带电测试", "10kV场景"],
    "tags_zh": ["光电隔离", "高压测量"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 220
  },
  {
    "id": "keer-15001g",
    "sku": "KEER-15001G",
    "name_zh": "高低压计量装置现场检测仪（单相）",
    "name_en": "HV/LV Metering Device Field Inspector (Single-Phase)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于高低压计量装置的现场检测与管理（单相）。",
    "highlights_zh": ["计量检测", "现场管理", "单相"],
    "tags_zh": ["计量", "高低压"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": null, "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 230
  },
  {
    "id": "keer-303g-10kv",
    "sku": "KEER-303G/10KV",
    "name_zh": "高低压计量装置现场测试管理仪（三相四线）",
    "name_en": "HV/LV Metering Test Manager (3P4W)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于10kV高低压计量装置现场测试与管理（三相四线）。",
    "highlights_zh": ["三相四线", "现场管理", "10kV场景"],
    "tags_zh": ["计量", "高低压", "10kV"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 240
  },

  {
    "id": "keer-1140v-hv-voltage",
    "sku": "KEER-1140V",
    "name_zh": "高压电压测试仪（1140V）",
    "name_en": "High-Voltage Voltage Tester (1140V)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于1140V高压电压参数的现场测试。",
    "highlights_zh": ["高压测量", "现场测试", "安全作业"],
    "tags_zh": ["高压电压", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "1140V", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 310
  },
  {
    "id": "keer-6kv-hv-voltage",
    "sku": "KEER-6KV",
    "name_zh": "高压电压测试仪（6kV）",
    "name_en": "High-Voltage Voltage Tester (6kV)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于6kV高压电压参数的现场测试。",
    "highlights_zh": ["高压测量", "现场测试", "安全作业"],
    "tags_zh": ["高压电压", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "6kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 320
  },
  {
    "id": "keer-10kv-hv-voltage",
    "sku": "KEER-10KV",
    "name_zh": "高压电压测试仪（10kV）",
    "name_en": "High-Voltage Voltage Tester (10kV)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于10kV高压电压参数的现场测试。",
    "highlights_zh": ["高压测量", "现场测试", "安全作业"],
    "tags_zh": ["高压电压", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 330
  },
  {
    "id": "keer-40kv-hv-voltage",
    "sku": "KEER-40KV",
    "name_zh": "高压电压测试仪（40kV）",
    "name_en": "High-Voltage Voltage Tester (40kV)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于40kV高压电压参数的现场测试。",
    "highlights_zh": ["高压测量", "现场测试", "安全作业"],
    "tags_zh": ["高压电压", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "40kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 340
  },

  {
    "id": "keer-1140v-50-100a-hv-current",
    "sku": "KEER-1140V/50/100A",
    "name_zh": "高压电流测试仪（1140V / 50/100A）",
    "name_en": "High-Voltage Current Tester (1140V / 50/100A)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于1140V场景下高压电流参数测试（50/100A）。",
    "highlights_zh": ["高压电流", "现场测试", "安全作业"],
    "tags_zh": ["高压电流", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "1140V", "current_range": "50/100A" },
    "downloads": [],
    "status": "active",
    "sort": 410
  },
  {
    "id": "keer-6kv-50-100a-hv-current",
    "sku": "KEER-6KV/50/100A",
    "name_zh": "高压电流测试仪（6kV / 50/100A）",
    "name_en": "High-Voltage Current Tester (6kV / 50/100A)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于6kV场景下高压电流参数测试（50/100A）。",
    "highlights_zh": ["高压电流", "现场测试", "安全作业"],
    "tags_zh": ["高压电流", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "6kV", "current_range": "50/100A" },
    "downloads": [],
    "status": "active",
    "sort": 420
  },
  {
    "id": "keer-10kv-50-100a-hv-current",
    "sku": "KEER-10KV/50/100A",
    "name_zh": "高压电流测试仪（10kV / 50/100A）",
    "name_en": "High-Voltage Current Tester (10kV / 50/100A)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于10kV场景下高压电流参数测试（50/100A）。",
    "highlights_zh": ["高压电流", "现场测试", "安全作业"],
    "tags_zh": ["高压电流", "光电隔离"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": "50/100A" },
    "downloads": [],
    "status": "active",
    "sort": 430
  },

  {
    "id": "keer-15000g-10kv",
    "sku": "KEER-15000G/10KV",
    "name_zh": "高低压电力参数测试仪（10kV）",
    "name_en": "HV/LV Power Parameter Tester (10kV)",
    "category_id": "hv-optical-isolation",
    "short_zh": "用于10kV高低压电力参数的现场测试与记录。",
    "highlights_zh": ["高低压测量", "参数测试", "现场记录"],
    "tags_zh": ["电参量", "高低压", "10kV"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": { "voltage_range": "10kV", "current_range": null },
    "downloads": [],
    "status": "active",
    "sort": 510
  },

  {
    "id": "keer-106b",
    "sku": "KEER-106B",
    "name_zh": "高低压电力设备故障探测仪",
    "name_en": "HV/LV Power Equipment Fault Detector",
    "category_id": "fault-ndt",
    "short_zh": "用于电力设备运行故障的探测与定位。",
    "highlights_zh": ["故障探测", "隐患排查", "现场定位"],
    "tags_zh": ["故障定位", "无损检测"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": {},
    "downloads": [],
    "status": "active",
    "sort": 610
  },
  {
    "id": "keer-cwt160",
    "sku": "KEER-CWT160",
    "name_zh": "电力专用热成像仪",
    "name_en": "Thermal Imager for Power Applications",
    "category_id": "fault-ndt",
    "short_zh": "用于电力设备温升检测与过热点隐患排查。",
    "highlights_zh": ["热成像", "隐患排查", "巡检维护"],
    "tags_zh": ["热成像", "巡检"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": {},
    "downloads": [],
    "status": "active",
    "sort": 620
  },
  {
    "id": "keer-007a",
    "sku": "KEER-007A",
    "name_zh": "电力专用电缆故障寻踪定位仪",
    "name_en": "Power Cable Fault Tracing & Locator",
    "category_id": "fault-ndt",
    "short_zh": "用于电缆故障寻踪与定位，提高检修效率。",
    "highlights_zh": ["电缆寻踪", "故障定位", "检修提效"],
    "tags_zh": ["电缆", "故障定位"],
    "image": { "cover": null, "gallery": [] },
    "specs_summary": {},
    "downloads": [],
    "status": "active",
    "sort": 630
  }
];

// Map raw products to Schema
export const products: Product[] = rawProducts.map((p) => {
  const category = categories.find(c => c.id === p.category_id);
  const specMap: Record<string, string> = {};
  
  if (p.specs_summary) {
    Object.entries(p.specs_summary).forEach(([key, value]) => {
      if (value) specMap[key] = value;
    });
  }

  return {
    ...p,
    categoryId: p.category_id,
    categoryName: category?.name_zh || "Unknown Category",
    fullDescription: p.short_zh, // Use short description as placeholder
    slug: p.id,
    name: p.name_zh,
    description: p.short_zh,
    features: p.highlights_zh,
    images: [],
    specs: specMap,
    status: p.status as "active" | "inactive",
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Helper to get products or services based on category type
export function getItemsByCategory(categoryId: string): (Product | Service)[] {
  if (categoryId === "services") {
    return services.sort((a, b) => a.sort - b.sort);
  }
  return products.filter((p) => p.categoryId === categoryId);
}

export function getAllItems(): (Product | Service)[] {
  return [...products, ...services];
}

export function getServices(): Service[] {
  return services.sort((a, b) => a.sort - b.sort);
}

export function getAllCategories(): Category[] {
  return categories.sort((a, b) => a.order - b.order);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

