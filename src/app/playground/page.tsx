"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ConfirmDialog } from "@/components/ui/dialog";

export default function PlaygroundPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const triggerBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-bold">UI Component Playground</h1>
        <p className="text-muted-foreground">
          Dokumentasi dan pengujian komponen UI NusaCargo Control Tower.
        </p>
      </div>

      {/* Button Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants & Sizes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </CardContent>
      </Card>

      {/* Badge Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Badge Variants</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="success">Success / Transit</Badge>
          <Badge variant="warning">Warning / Delayed</Badge>
          <Badge variant="danger">Danger / Cancelled</Badge>
        </CardContent>
      </Card>

      {/* Form Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Inputs & Select</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nomor Resi</label>
            <Input placeholder="Contoh: NC-2026-000481" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status Pengiriman</label>
            <Select>
              <option value="all">Semua Status</option>
              <option value="transit">In Transit</option>
              <option value="delivered">Delivered</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Confirm Dialog */}
      <Card>
        <CardHeader>
          <CardTitle>Aksesibilitas Dialog</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            ref={triggerBtnRef}
            variant="danger"
            onClick={() => setIsDialogOpen(true)}
          >
            Buka Dialog Konfirmasi
          </Button>

          <ConfirmDialog
            isOpen={isDialogOpen}
            triggerRef={triggerBtnRef}
            onClose={() => setIsDialogOpen(false)}
            onConfirm={() => {
              alert("Aksi dikonfirmasi!");
              setIsDialogOpen(false);
            }}
            title="Hapus Data Pengiriman?"
            description="Tindakan ini tidak dapat dibatalkan. Data pengiriman resi ini akan dihapus permanen dari sistem."
          />
        </CardContent>
      </Card>
    </main>
  );
}
