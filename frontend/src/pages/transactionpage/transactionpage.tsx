import { useCallback, useRef, useState } from "react"
import Webcam from "react-webcam"
import './transactionpage.css'

const TransactionPage = () => {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<String | null>(null)

     const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
        setCapturedImage(imageSrc);
        }
    }, [webcamRef]);

    return(
        <div className="transaction-page">
            <div className="capture-container">
                <Webcam
                    audio={false}
                    ref = {webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={{
                        facingMode: "environment"
                    }}
                    className="webcam"
                />
                <button className="capture-button">Capture Image</button>
            </div>
        </div>
    )
}

export default TransactionPage