import { Document, Page, pdfjs } from "react-pdf"
import { useState } from "react"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`

const PdfViewer = () => {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [showPdf, setShowPdf] = useState(false) // Controla si se muestra el visor

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
    }

    return (
        <div className="flex flex-col items-center">
            {/* Ícono para abrir el PDF */}
            <button onClick={() => setShowPdf(true)}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                    alt="Abrir PDF"
                    width="30"
                />
            </button>

            {/* Visor de PDF (se muestra solo si showPdf es true) */}
            {showPdf && (
                <div className="mt-4 p-4 border border-gray-300 rounded-md">
                    <h2 className="text-xl font-bold mb-4">Visor de PDF</h2>
                    <Document file="/cv.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        {numPages &&
                            Array.from({ length: numPages }, (_, index) => (
                                <Page key={index} pageNumber={index + 1} />
                            ))}
                    </Document>
                    <button className="mt-2 p-2 bg-red-500 text-white rounded" onClick={() => setShowPdf(false)}>
                        Cerrar PDF
                    </button>
                </div>
            )}
        </div>
    )
}

export default PdfViewer