import PDFViewer from "@/components/PDFViewer";

export default function page() {
  return (
    <div className="w-full h-full">
      <PDFViewer
        file={
          "https://drive.google.com/file/d/1TFZ1EGRIW9VY1ceFHZFGugGyO_dU2HHI/view?usp=sharing"
        }
      />
    </div>
  );
}
