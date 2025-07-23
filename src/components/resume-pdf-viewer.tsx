"use client"
import { X, Download, Printer, ZoomIn, ZoomOut, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { jsPDF } from "jspdf"

interface ResumePDFViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumePDFViewer({ isOpen, onClose }: ResumePDFViewerProps) {
  const [zoom, setZoom] = useState(1)

  if (!isOpen) return null

  const downloadPDF = () => {
    // Create a proper PDF download using the image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    img.crossOrigin = "anonymous"
    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width
      canvas.height = img.height

      // Draw image on canvas
      ctx?.drawImage(img, 0, 0)

      // Convert to PDF using jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [img.width, img.height],
      })

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png")
      pdf.addImage(imgData, "PNG", 0, 0, img.width, img.height)

      // Download the PDF
      pdf.save("Chandan_Mahato_Resume.pdf")
    }

    img.onerror = () => {
      // Fallback: download the image directly
      const link = document.createElement("a")
      link.href = "/resume-image.png"
      link.download = "Chandan_Mahato_Resume.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    img.src = "/resume-image.png"
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5))

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-6xl max-h-[95vh] flex flex-col">
        {/* Header Controls */}
        <div className="bg-gray-100 border-b p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <Button
              onClick={onClose}
              size="sm"
              variant="outline"
              className="flex items-center gap-2 bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
            <h2 className="text-xl font-semibold text-gray-800">Resume - Chandan Mahato</h2>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2 mr-4">
              <Button onClick={handleZoomOut} size="sm" variant="outline">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">{Math.round(zoom * 100)}%</span>
              <Button onClick={handleZoomIn} size="sm" variant="outline">
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={downloadPDF} size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={() => window.print()} size="sm" variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-200 p-4">
          <div className="flex justify-center">
            <div
              className="bg-white shadow-lg"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top center",
                transition: "transform 0.2s ease",
              }}
            >
              <Image
                src="/resume-image.png"
                alt="Chandan Mahato Resume"
                width={800}
                height={1100}
                className="max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
