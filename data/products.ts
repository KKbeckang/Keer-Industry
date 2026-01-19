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

export interface Category {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export const categories: Category[] = [
  {
    id: "sensors",
    name: "工业传感器",
    description: "高精度压力、温度及流量传感器，适用于严苛的工业过程控制环境。",
  },
  {
    id: "measurement",
    name: "电力测量仪器",
    description: "专业的电力分析与测试工具，保障电力系统的安全与效率。",
  },
  {
    id: "environmental",
    name: "环境测试设备",
    description: "精准监测温度、湿度、空气质量等环境参数。",
  },
];

export const products: Product[] = [
  // --- Sensors ---
  {
    id: "s-001",
    slug: "kp-100-pressure-sensor",
    name: "KP-100 高精度压力传感器",
    categoryId: "sensors",
    categoryName: "工业传感器",
    description: "专为液压系统设计的紧凑型压力传感器，具有卓越的抗冲击性能。",
    fullDescription: "KP-100 系列压力传感器采用先进的压阻式硅技术，提供从 -0.1 MPa 到 100 MPa 的宽测量范围。其全不锈钢结构确保了在恶劣工业环境中的长期稳定性，特别适用于液压站、注塑机及工程机械。",
    features: [
      "精度高达 ±0.25% F.S.",
      "全不锈钢 316L 隔离膜片",
      "抗过载能力强，可达 200%",
      "多种输出信号可选 (4-20mA, 0-10V)",
    ],
    images: ["/images/placeholder-sensor.jpg"],
    specs: {
      "测量范围": "0 ~ 100 MPa",
      "精度": "±0.25% F.S.",
      "输出信号": "4-20mA / 0-10V / RS485",
      "工作温度": "-40°C ~ +125°C",
      "防护等级": "IP67",
      "过程连接": "G1/4, 1/4NPT, M20x1.5",
    },
    downloads: [
      { title: "KP-100 数据手册", url: "/downloads/kp-100-datasheet.pdf", type: "PDF" },
      { title: "KP-100 安装指南", url: "/downloads/kp-100-manual.pdf", type: "PDF" },
    ],
    isHot: true,
  },
  {
    id: "s-002",
    slug: "kt-500-temp-transmitter",
    name: "KT-500 智能温度变送器",
    categoryId: "sensors",
    categoryName: "工业传感器",
    description: "带现场显示的智能温度变送器，支持 HART 协议。",
    fullDescription: "KT-500 是一款高性能智能温度变送器，集成了高精度 A/D 转换与微处理器技术。它不仅能将热电阻或热电偶信号转换为标准模拟信号，还支持 HART 通讯协议，方便远程组态与诊断。",
    features: [
      "支持 PT100, K, J, E 等多种传感器输入",
      "带背光 LCD 现场显示",
      "HART 协议通讯",
      "本安防爆认证 (Ex ia IIC T6)",
    ],
    images: ["/images/placeholder-temp.jpg"],
    specs: {
      "输入类型": "RTD / TC / Ohm / mV",
      "输出": "4-20mA + HART",
      "精度": "±0.1°C (RTD)",
      "显示": "5位 LCD 带背光",
      "供电电压": "12 ~ 36 VDC",
    },
    downloads: [
      { title: "KT-500 选型手册", url: "#", type: "PDF" },
    ],
  },
  {
    id: "s-003",
    slug: "kf-200-flow-meter",
    name: "KF-200 电磁流量计",
    categoryId: "sensors",
    categoryName: "工业传感器",
    description: "适用于导电液体的流量测量，无压损，高稳定性。",
    fullDescription: "KF-200 电磁流量计适用于测量封闭管道中导电液体和浆液的体积流量。广泛应用于化工、环保、冶金、医药、造纸、给排水等行业。",
    features: [
      "测量不受流体密度、粘度、温度、压力和电导率变化的影响",
      "测量管内无阻流部件，无压损",
      "量程比宽，可达 1:20",
    ],
    images: ["/images/placeholder-flow.jpg"],
    specs: {
      "口径": "DN10 ~ DN2000",
      "电极材料": "316L / 钛 / 钽 / 哈氏合金",
      "衬里材料": "橡胶 / PTFE / PFA",
      "精度": "±0.5%",
    },
    downloads: [],
  },
  
  // --- Measurement Instruments ---
  {
    id: "m-001",
    slug: "km-800-multimeter",
    name: "KM-800 工业级真有效值万用表",
    categoryId: "measurement",
    categoryName: "电力测量仪器",
    description: "坚固耐用，IP67 防护，专为恶劣工业现场设计。",
    fullDescription: "KM-800 旨在设定恶劣环境下使用的工业万用表新标准。具有 IP67 防水防尘等级，并通过 3 米跌落测试。它可以测量高达 1000V 的电压和 20A 的电流。",
    features: [
      "真有效值 (True RMS) 测量",
      "IP67 防水防尘",
      "3米防跌落",
      "内置温度测量功能",
    ],
    images: ["/images/placeholder-multimeter.jpg"],
    specs: {
      "DC 电压": "1000V",
      "AC 电压": "1000V",
      "DC 电流": "10A (20A for 30s)",
      "电阻": "50 MΩ",
      "安全等级": "CAT IV 600V / CAT III 1000V",
    },
    downloads: [
      { title: "KM-800 说明书", url: "#", type: "PDF" },
    ],
    isNew: true,
  },
  {
    id: "m-002",
    slug: "kp-3000-power-analyzer",
    name: "KP-3000 三相功率分析仪",
    categoryId: "measurement",
    categoryName: "电力测量仪器",
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
  {
    id: "m-003",
    slug: "kc-200-clamp-meter",
    name: "KC-200 交直流钳形表",
    categoryId: "measurement",
    categoryName: "电力测量仪器",
    description: "小巧便携，支持大电流非接触测量。",
    fullDescription: "KC-200 是一款紧凑型交直流钳形表，钳口开口达 40mm，可轻松夹住粗电缆。具备浪涌电流测量功能，可捕捉电机启动电流。",
    features: [
      "600A AC/DC 量程",
      "浪涌电流捕捉",
      "非接触电压检测 (NCV)",
    ],
    images: [],
    specs: {
      "AC 电流": "600A",
      "DC 电流": "600A",
      "钳口开口": "40mm",
    },
    downloads: [],
  },

  // --- Environmental ---
  {
    id: "e-001",
    slug: "ke-100-particle-counter",
    name: "KE-100 激光粒子计数器",
    categoryId: "environmental",
    categoryName: "环境测试设备",
    description: "手持式空气质量检测仪，用于洁净室监测。",
    fullDescription: "KE-100 是一款六通道手持式激光粒子计数器，符合 ISO 21501-4 标准。内置大容量数据存储，支持 USB 数据导出，是 HVAC 系统检查和室内空气质量 (IAQ) 评估的得力助手。",
    features: [
      "同时监测 6 个粒径通道",
      "流量 2.83 L/min (0.1 CFM)",
      "内置温湿度传感器",
      "可存储 10,000 组数据",
    ],
    images: [],
    specs: {
      "粒径通道": "0.3, 0.5, 1.0, 3.0, 5.0, 10.0 μm",
      "光源": "长寿命激光二极管",
      "计数效率": "50% @ 0.3μm; 100% for particles > 0.45μm",
      "电池寿命": "10 小时",
    },
    downloads: [
      { title: "KE-100 校准证书样本", url: "#", type: "PDF" },
    ],
  },
  {
    id: "e-002",
    slug: "ke-200-thermo-hygrometer",
    name: "KE-200 精密温湿度计",
    categoryId: "environmental",
    categoryName: "环境测试设备",
    description: "快速响应，高精度温湿度测量。",
    fullDescription: "KE-200 采用瑞士进口传感器，具有极快的响应速度和极高的稳定性。适用于实验室、仓库、博物馆等对温湿度敏感的场所。",
    features: [
      "露点和湿球温度计算",
      "最大/最小/平均值保持",
      "背光显示",
    ],
    images: [],
    specs: {
      "温度范围": "-20°C ~ 60°C",
      "湿度范围": "0 ~ 100% RH",
      "温度精度": "±0.5°C",
      "湿度精度": "±2.5% RH",
    },
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
  return categories;
}
