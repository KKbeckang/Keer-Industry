# Product Data Schema

This document defines the data structure for products in the Keer Industry website.

## Type Definition (`Product`)

```typescript
interface Product {
  id: string;               // Unique ID (e.g., "p-1001")
  slug: string;             // URL-friendly string (e.g., "k-pressure-100")
  name: string;             // Display name (e.g., "K-Series High Precision Pressure Sensor")
  
  // Categorization
  categoryId: string;       // References a Category ID (e.g., "sensors")
  categoryName: string;     // Display name for category (e.g., "Industrial Sensors")
  
  // Display Info
  description: string;      // Short summary for cards
  fullDescription: string;  // Detailed markdown/text for PDP
  features: string[];       // List of key selling points
  
  // Media
  images: string[];         // Array of image URLs (first is cover)
  
  // Technical Data
  specs: {                  // Key-Value pairs for the specs table
    [key: string]: string;  // e.g., "Range": "0-100 MPa"
  };
  
  // Resources
  downloads: {
    title: string;          // e.g., "User Manual"
    url: string;            // Path to file
    type: "PDF" | "CAD" | "ZIP";
  }[];
  
  // Commercial
  isNew?: boolean;          // "New" badge
  isHot?: boolean;          // "Hot" badge
}
```

## Category Definition (`Category`)

```typescript
interface Category {
  id: string;               // e.g., "sensors"
  name: string;             // e.g., "Industrial Sensors"
  description: string;
  image: string;            // Cover image for category card
}
```

## Data Strategy
- Currently using a static `data/products.ts` file as the "database".
- Future migration: Can easily map this JSON structure to a CMS (Strapi/Sanity) or SQL database.
