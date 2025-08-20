"use client";
import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewerClient = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [fitWidth, setFitWidth] = useState(false);

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(800);

  // States untuk custom canvas positioning
  const [pdfPosition, setPdfPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });

  // PDF dimensions
  const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });

  // update container size saat resize window
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setContainerWidth(newWidth);

        // Auto center saat resize
        centerPDF();
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center PDF function
  const centerPDF = () => {
    if (containerRef.current && pdfDimensions.width > 0) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerX = (containerRect.width - pdfDimensions.width) / 2;
      const centerY = (containerRect.height - pdfDimensions.height) / 2;

      setPdfPosition({
        x: Math.max(centerX, 0),
        y: Math.max(centerY, 0),
      });
    }
  };

  // Auto center when PDF loads or scale changes
  useEffect(() => {
    if (numPages && pdfDimensions.width > 0) {
      // Delay untuk memastikan PDF sudah render
      setTimeout(centerPDF, 100);
    }
  }, [numPages, scale, fitWidth, pdfDimensions]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Handle PDF page load untuk get dimensions
  const onPageLoadSuccess = (page) => {
    const currentScale = fitWidth ? (containerWidth * 0.8) / 600 : scale;
    const width = page.width * currentScale;
    const height = page.height * currentScale;

    setPdfDimensions({ width, height });
  };

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev - 1 <= 1 ? 1 : prev - 1));

  const goToNextPage = () =>
    setPageNumber((prev) => (prev + 1 >= numPages ? numPages : prev + 1));

  const goToPage = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= numPages) {
      setPageNumber(val);
    }
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setScale(1.2);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;

    const target = e.target;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "INPUT" ||
      target.closest("button") ||
      target.closest("input") ||
      target.closest(".react-pdf__Page__textLayer") ||
      target.closest(".react-pdf__Page__annotationLayer")
    ) {
      return;
    }

    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragStartPosition({ ...pdfPosition });

    e.preventDefault();
    e.stopPropagation();
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setDragStartPosition({ ...pdfPosition });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;

    e.preventDefault();
    const touch = e.touches[0];

    const deltaX = touch.clientX - dragStart.x;
    const deltaY = touch.clientY - dragStart.y;

    setPdfPosition({
      x: dragStartPosition.x + deltaX,
      y: dragStartPosition.y + deltaY,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging) return;

      e.preventDefault();

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setPdfPosition({
        x: dragStartPosition.x + deltaX,
        y: dragStartPosition.y + deltaY,
      });
    };

    const handleGlobalMouseUp = (e) => {
      if (e.button === 0) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove, {
        passive: false,
      });
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("mouseleave", handleGlobalMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
        document.removeEventListener("mouseleave", handleGlobalMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
    }
  }, [isDragging, dragStart, dragStartPosition]);

  return (
    <div className="h-screen flex flex-col">
      {/* Toolbar */}
      <div className="fixed top-16 left-30 right-0 z-20 bg-white shadow p-3 flex flex-wrap items-center gap-3">
        {/* Page Controls */}
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className={`px-3 py-1 rounded text-white text-sm ${
            pageNumber <= 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className={`px-3 py-1 rounded text-white text-sm ${
            pageNumber >= numPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
        <input
          type="number"
          value={pageNumber}
          onChange={goToPage}
          className="w-16 border rounded px-2 py-1 text-sm"
          min={1}
          max={numPages || 1}
        />
        <span className="text-sm font-semibold text-gray-700">
          / {numPages || "..."}
        </span>

        {/* Zoom Controls */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            -
          </button>
          <input
            type="range"
            min="50"
            max="300"
            value={scale * 100}
            onChange={(e) => setScale(e.target.value / 100)}
            className="w-32"
          />
          <button
            onClick={zoomIn}
            className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          >
            +
          </button>
          <span className="text-sm w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={resetZoom}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            Reset
          </button>
          <button
            onClick={() => setFitWidth(!fitWidth)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            {fitWidth ? "Fit Page" : "Fit Width"}
          </button>
          <button
            onClick={centerPDF}
            className="px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded text-sm"
          >
            📍 Center
          </button>
        </div>

        {/* Status indicator */}
        <div className="text-xs text-gray-500 ml-2">
          🖱️ Drag to pan | Position: {Math.round(pdfPosition.x)},{" "}
          {Math.round(pdfPosition.y)}
        </div>
      </div>

      {/* Canvas Container */}
      <div
        ref={containerRef}
        className={`flex-1 bg-gray-50 mt-30 relative overflow-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          userSelect: isDragging ? "none" : "auto",
        }}
      >
        {/* PDF positioned absolutely dalam canvas */}
        <div
          className="absolute transition-none"
          style={{
            left: `${pdfPosition.x}px`,
            top: `${pdfPosition.y}px`,
            transform: isDragging ? "none" : "translateZ(0)", // Hardware acceleration
          }}
        >
          <Document
            file="/example.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div
                className="p-8 text-center bg-white rounded shadow-lg"
                style={{ width: "400px", height: "300px" }}
              >
                Loading PDF...
              </div>
            }
            error={
              <div
                className="p-8 text-center text-red-600 bg-white rounded shadow-lg"
                style={{ width: "400px" }}
              >
                Failed to load PDF. Please make sure the file exists in the
                public folder.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer
              renderAnnotationLayer
              scale={fitWidth ? (containerWidth * 0.8) / 600 : scale}
              onLoadSuccess={onPageLoadSuccess}
              className="shadow-lg bg-white"
              style={{
                display: "block",
              }}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFViewerClient;
