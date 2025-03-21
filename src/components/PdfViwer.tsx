import { Document, Page, pdfjs } from "react-pdf"
import { useState } from "react"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`

const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number | null>(null)

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Visor de PDF</h2>
            <Document
                file="/ejemplo.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {numPages &&
                    Array.from({ length: numPages }, (_, index) => (
                        <Page key={index} pageNumber={index + 1} />
                    ))}
            </Document>
        </div>
    )
}

export default PdfViewer