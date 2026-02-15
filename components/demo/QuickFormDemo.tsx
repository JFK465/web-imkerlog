'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface FormData {
  beeSighted: boolean | null
  varroaPresent: boolean | null
  notes: string
}

export function QuickFormDemo() {
  const [formData, setFormData] = useState<FormData>({
    beeSighted: null,
    varroaPresent: null,
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleSubmit = () => {
    if (formData.beeSighted !== null && formData.varroaPresent !== null) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-6 bg-green-50 rounded-xl text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
        <p className="text-green-700 font-medium">✓ Erfolgreich dokumentiert</p>
      </motion.div>
    )
  }

  return (
    <div className="space-y-4 p-4 bg-white rounded-xl shadow-lg">
      <div className="space-y-2">
        <p className="font-medium text-gray-700">Biene gesichtet?</p>
        <div className="flex gap-2">
          <button
            onClick={() => setFormData({ ...formData, beeSighted: true })}
            className={`px-4 py-2 rounded-lg ${
              formData.beeSighted === true ? 'bg-green-500 text-white' : 'bg-gray-100'
            }`}
          >
            Ja
          </button>
          <button
            onClick={() => setFormData({ ...formData, beeSighted: false })}
            className={`px-4 py-2 rounded-lg ${
              formData.beeSighted === false ? 'bg-red-500 text-white' : 'bg-gray-100'
            }`}
          >
            Nein
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-medium text-gray-700">Varroa-Befall?</p>
        <div className="flex gap-2">
          <button
            onClick={() => setFormData({ ...formData, varroaPresent: true })}
            className={`px-4 py-2 rounded-lg ${
              formData.varroaPresent === true ? 'bg-red-500 text-white' : 'bg-gray-100'
            }`}
          >
            Ja
          </button>
          <button
            onClick={() => setFormData({ ...formData, varroaPresent: false })}
            className={`px-4 py-2 rounded-lg ${
              formData.varroaPresent === false ? 'bg-green-500 text-white' : 'bg-gray-100'
            }`}
          >
            Nein
          </button>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Bemerkungen</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full p-3 border border-gray-200 rounded-lg resize-none"
          rows={2}
          placeholder="Optional..."
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={formData.beeSighted === null || formData.varroaPresent === null}
        className="w-full py-3 bg-primary text-white rounded-lg font-medium disabled:opacity-50"
      >
        Absenden
      </button>
    </div>
  )
}
