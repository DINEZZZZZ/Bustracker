import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
  const [scannedData, setScannedData] = useState('');
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const startScanning = () => {
    setScanning(true);
  };
  const stopScanning = () => {
    console.log('Stopping scanning...'); 
    setScanning(false);
    setScannedData(''); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">QR Code Scanner</h1>
      {!scannedData && scanning && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          className="w-full max-w-md"
        />
      )}
      {scannedData ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Scanned Data:</h2>
          <p className="text-lg">{scannedData}</p>
        </div>
      ) : (
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            scanning ? 'hidden' : ''
          }`}
          onClick={startScanning}
        >
          Start Scan
        </button>
      )}
      {scanning && (
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={stopScanning}
        >
          Stop Scan
        </button>
      )}
      {scannedData && (
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold mb-4">Scanned Data:</h2>
          <p className="text-lg">{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
