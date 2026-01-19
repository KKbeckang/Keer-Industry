import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DesignPage() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900">Keer Design System</h1>
        <p className="text-xl text-neutral-600">
          Professional, Industrial, Reliable. (Fluke/HIOKI Hybrid)
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Form Elements</h2>
        <div className="grid max-w-sm gap-4">
          <Input placeholder="Default Input" />
          <Input disabled placeholder="Disabled Input" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Badges (Status Indicators)</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default (Blue)</Badge>
          <Badge variant="secondary">Secondary (Yellow)</Badge>
          <Badge variant="success">Success (Green)</Badge>
          <Badge variant="destructive">Destructive (Red)</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Card</CardTitle>
              <CardDescription>Industrial Series X-100</CardDescription>
            </CardHeader>
            <CardContent>
              <p>High-precision measurement tool for harsh environments.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Tables (Data Sheets)</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Specification</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Unit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Measurement Range</TableCell>
                <TableCell>0 - 1000</TableCell>
                <TableCell>V</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Accuracy</TableCell>
                <TableCell>±0.5%</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operating Temp</TableCell>
                <TableCell>-10 to 50</TableCell>
                <TableCell>°C</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  )
}
