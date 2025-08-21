import PDFViewer from "@/components/PDFViewer";

export default function page() {
  return (
    <div className="w-full h-full">
      <PDFViewer url={"/example.pdf"} />
    </div>
  );
}
