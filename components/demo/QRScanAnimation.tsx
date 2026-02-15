'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Check } from 'lucide-react'

export function QRScanAnimation() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle')

  useEffect(() => {
    if (scanState === 'scanning') {
      const timer = setTimeout(() => {
        setScanState('complete')
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [scanState])

  const startScan = () => {
    setScanState('scanning')
  }

  return (
    <div className="relative w-64 h-64 mx-auto bg-white rounded-2xl shadow-xl p-4 overflow-hidden" data-testid="qr-animation">
      {scanState === 'idle' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center h-full"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-4xl font-bold text-white">QR</span>
          </div>
          <button
            onClick={startScan}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg font-medium"
          >
            Scan starten
          </button>
        </motion.div>
      )}

      {scanState === 'scanning' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/80"
        >
          <Camera className="w-12 h-12 text-white animate-pulse" />
        </motion.div>
      )}

      {scanState === 'complete' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center justify-center h-full"
        >
          <Check className="w-16 h-16 text-green-500" />
          <p className="mt-2 text-green-600 font-medium">Scan abgeschlossen!</p>
        </motion.div>
      )}
    </div>
  )
}
