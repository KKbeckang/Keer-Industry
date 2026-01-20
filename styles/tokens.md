# Design System Tokens

## 1. Brand Identity
**Style Reference:** Professional, Industrial, Reliable (Fluke/HIOKI Hybrid).

### Color Palette

**Primary (Trust & Professionalism)**
- **Keer Blue (`#005DAA`)**: Main brand color. Used for headers, primary buttons, links.
- *Hover*: `#004a88`
- *Reference*: HIOKI Blue / Siemens Blue.

**Secondary (Visibility & Action)**
- **Industrial Yellow (`#FFC20E`)**: Accent color. Used for CTAs, highlights, warnings.
- *Hover*: `#e0aa00`
- *Reference*: Fluke Yellow.

**Neutrals (Technical Documentation)**
- **Backgrounds**: White (`#FFFFFF`), Light Grey (`#F9FAFB`).
- **Borders**: `#E5E7EB` (Light), `#D1D5DB` (Medium).
- **Text**: 
  - Headings: `#111827` (Almost Black)
  - Body: `#374151` (Dark Grey)
  - Muted: `#6B7280` (Medium Grey)

---

## 2. Typography
**Font Family:** System Sans-Serif stack (optimized for speed and native feel).
- English: Inter, Roboto, Segoe UI.
- Chinese: PingFang SC, Microsoft YaHei.

**Type Scale:**
- **H1:** 2.25rem (36px) / Bold
- **H2:** 1.875rem (30px) / Semibold
- **H3:** 1.5rem (24px) / Semibold
- **Body:** 1rem (16px) / Regular
- **Small:** 0.875rem (14px) / Regular

---

## 3. Component Characteristics

**Border Radius**
- **Small (2px):** Inputs, Badges. (Sharp, precise feel).
- **Default (4px):** Buttons, Cards.
- **Large (8px):** Modals, large containers.

**Shadows**
- **Card:** Subtle elevation (`0 1px 3px`).
- **Hover:** Lift effect (`0 4px 6px`).
- **Dropdown/Modal:** Deep shadow (`0 10px 15px`).

**Spacing**
- Base unit: 4px (Tailwind standard).
- Section Padding: `py-12` (48px) or `py-16` (64px).
- Component Gap: `gap-4` (16px).
