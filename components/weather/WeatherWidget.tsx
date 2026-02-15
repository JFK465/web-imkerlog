'use client'

import { Sun, Cloud, CloudRain, Wind } from 'lucide-react'

interface WeatherData {
  temperature: number
  windSpeed: number
  precipitation: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy'
}

interface WeatherWidgetProps {
  data: WeatherData
}

export function WeatherWidget({ data }: WeatherWidgetProps) {
  const getIcon = () => {
    switch (data.condition) {
      case 'sunny': return <Sun className="w-8 h-8 text-amber-500" />
      case 'cloudy': return <Cloud className="w-8 h-8 text-gray-400" />
      case 'rainy': return <CloudRain className="w-8 h-8 text-blue-400" />
      default: return <Cloud className="w-8 h-8 text-gray-400" />
    }
  }

  const getAdvice = () => {
    if (data.condition === 'rainy') return 'Regen erwartet - Varroa-Behandlung empfohlen'
    if (data.temperature < 10) return 'Zu kalt für Durchsicht'
    if (data.temperature > 30) return 'Sehr warm - früh morgens oder abends arbeiten'
    return 'Ideal für Durchsicht'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Heute</p>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">{data.temperature}°C</span>
            {getIcon()}
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <Wind className="w-4 h-4" />
          <span className="text-sm">{data.windSpeed} km/h</span>
        </div>
      </div>

      <div className="p-3 bg-amber-50 rounded-lg">
        <p className="text-amber-800 font-medium">{getAdvice()}</p>
      </div>
    </div>
  )
}
