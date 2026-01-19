# Information Architecture & Route Map

## 1. Site Map (Navigation)

### Top Navigation (Header)
- **首页 (Home)**
- **产品中心 (Products)**
  - [产品分类 1]
  - [产品分类 2]
- **解决方案 (Solutions)** (可选)
- **服务支持 (Support)**
- **关于我们 (About Us)**
- **联系我们 (Contact Us)**
- **搜索 (Search)**
- **语言切换 (EN/CN)**

### Footer
- **快速链接:** 产品中心, 关于我们, 联系我们, 新闻动态
- **法律条款:** 隐私政策, 使用条款
- **社交媒体:** 微信公众号, 抖音, LinkedIn
- **联系信息 & 版权所有**

---

## 2. Route Definition (Next.js App Router)

| Route Path | Component Purpose |
| :--- | :--- |
| `/` | **Home Page**: Brand introduction, featured products, latest news. |
| `/products` | **Product Listing (Index)**: Filterable list of all products. |
| `/products/[category]` | **Category Page**: Products within a specific category. |
| `/products/[category]/[slug]` | **Product Detail Page (PDP)**: Specs, images, downloads, inquiry button. |
| `/solutions` | **Solutions (Index)**: Case studies or industry applications. |
| `/support` | **Support/Downloads**: Manuals, datasheets, FAQs. |
| `/about` | **About Us**: Company history, certifications, team. |
| `/contact` | **Contact Us**: Address map, contact form, inquiry details. |

---

## 3. Page Content Modules (Section List)

### `/` (Home)
1. **Hero Section:** High-impact banner with value prop & primary CTA.
2. **Featured Products:** Grid of top-selling or new items.
3. **Why Choose Us:** 3-4 key differentiators (Quality, Speed, Support).
4. **Applications/Industries:** Carousel or grid of industries served.
5. **Latest News/Events:** Recent updates.
6. **Call to Action (Inquiry):** Prompt to contact sales.

### `/products` (Listing)
1. **Page Header:** Title & Breadcrumbs.
2. **Sidebar Filter:** Category, Spec ranges, Application.
3. **Product Grid:** Thumbnail, Name, Key Spec, "View Details" button.
4. **Pagination/Load More.**

### `/products/[slug]` (Detail)
1. **Product Hero:** Image gallery + Key Specs + "Request Quote" button.
2. **Description:** Detailed features and benefits.
3. **Specifications Table:** Technical data.
4. **Downloads:** PDF Manuals, Datasheets, CAD.
5. **Related Products:** Cross-sell recommendations.
6. **Inquiry Form:** Embedded or modal form specific to this product.

### `/support`
1. **Search/Filter:** Search documentation by product model.
2. **Resource Library:** Categorized list of downloads.
3. **FAQ Section:** Accordion style.
4. **Service Policy:** Warranty and repair info.

### `/about`
1. **Company Intro:** Who we are.
2. **Timeline/History:** Milestones.
3. **Certificates:** ISO, CE, etc.
4. **Factory/Office Tour:** Images/Video.

### `/contact`
1. **Contact Info:** Phone, Email, Address.
2. **Global Network:** Distributor map/list (if applicable).
3. **General Inquiry Form:** For non-product specific questions.
