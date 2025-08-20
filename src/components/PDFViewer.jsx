"use client";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const PDFViewerClient = dynamic(() => import("./PDFViewerClient"), {
  ssr: false,
  loading: () => (
    <Card className="w-full h-[600px] flex items-center justify-center rounded-2xl shadow-md">
      <CardContent className="flex flex-col items-center justify-center text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
        <p className="text-base text-muted-foreground">Loading PDF...</p>
      </CardContent>
    </Card>
  ),
});

const PDFViewer = () => {
  return <PDFViewerClient />;
};

export default PDFViewer;
