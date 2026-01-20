import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getProductBySlug, getCategoryById } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Share2 } from "lucide-react";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  // In a real app, we would fetch all product slugs
  return []; 
}

export default function ProductDetailPage({ params }: PageProps) {
  const { category: categoryId, slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const category = getCategoryById(product.categoryId);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />

      {/* Breadcrumb / Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-neutral-500">
            <Link href="/products" className="hover:text-primary transition-colors">
              产品中心
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${categoryId}`} className="hover:text-primary transition-colors">
              {category?.name_zh || product.categoryName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium truncate max-w-[200px] sm:max-w-md">
              {product.name_zh}
            </span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1 space-y-12">
        {/* Hero Section */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery Placeholder */}
            <div className="aspect-square bg-neutral-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              <span className="text-neutral-400 font-medium">Product Image Gallery</span>
              {product.status === 'active' && (
                <Badge className="absolute top-4 left-4 bg-green-600">在售</Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
                    {product.name_zh}
                  </h1>
                  <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-primary">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-lg text-neutral-500 font-mono">{product.sku}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.tags_zh?.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="prose prose-neutral max-w-none text-neutral-600">
                <p>{product.short_zh}</p>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="font-semibold text-neutral-900">核心特性：</h3>
                <ul className="space-y-2">
                  {product.highlights_zh?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-100">
                <Button size="lg" className="flex-1">
                  咨询报价
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  下载资料
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Details Tabs / Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Specs Table */}
            <section className="bg-white rounded-lg border border-neutral-200 p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                技术参数
              </h2>
              
              {product.specs_summary && Object.keys(product.specs_summary).length > 0 ? (
                <div className="overflow-hidden rounded-md border border-neutral-200">
                  <Table>
                    <TableBody>
                      {Object.entries(product.specs_summary).map(([key, value]) => (
                        value && (
                          <TableRow key={key}>
                            <TableCell className="bg-neutral-50 font-medium w-1/3 text-neutral-600">
                              {/* Simple mapping for demo, would be better with a proper label map */}
                              {key === 'voltage_range' ? '电压量程' : 
                               key === 'current_range' ? '电流量程' : key}
                            </TableCell>
                            <TableCell>{value}</TableCell>
                          </TableRow>
                        )
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <p className="text-neutral-500 italic">暂无详细参数数据，请联系客服获取完整规格书。</p>
              )}
            </section>

            {/* Description / Application */}
            <section className="bg-white rounded-lg border border-neutral-200 p-6 md:p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-neutral-900">详细介绍</h2>
              <div className="prose prose-neutral max-w-none">
                <p>{product.fullDescription || product.short_zh}</p>
                {/* Placeholder for more rich text content */}
                <p className="text-neutral-500 mt-4">
                  (此处将展示更详细的产品应用场景、测量原理图解及现场案例图片。)
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar / Downloads */}
          <div className="space-y-6">
            <section className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-neutral-900 border-b border-neutral-100 pb-2">相关文档</h3>
              {product.downloads && product.downloads.length > 0 ? (
                <ul className="space-y-3">
                  {product.downloads.map((doc, i) => (
                    <li key={i}>
                      <a href={doc.url} className="flex items-center gap-3 group p-2 rounded hover:bg-neutral-50 transition-colors">
                        <div className="h-10 w-10 bg-neutral-100 rounded flex items-center justify-center text-neutral-500 group-hover:text-primary transition-colors">
                          <Download className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-neutral-900 group-hover:text-primary transition-colors line-clamp-1">
                            {doc.title}
                          </p>
                          <p className="text-xs text-neutral-500">{doc.type}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-neutral-500 text-center py-4">
                  暂无公开文档
                </div>
              )}
              <Button variant="outline" className="w-full text-sm">
                请求完整技术手册
              </Button>
            </section>

            <section className="bg-primary/5 rounded-lg border border-primary/10 p-6 space-y-4">
              <h3 className="font-bold text-primary">需要帮助？</h3>
              <p className="text-sm text-neutral-600">
                我们的工程师随时为您提供选型建议和技术支持。
              </p>
              <Button className="w-full">
                联系技术专家
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
