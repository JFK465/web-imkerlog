import { render, screen } from '@testing-library/react'
import { WeatherWidget } from '@/components/weather/WeatherWidget'

describe('WeatherWidget', () => {
  it('displays weather information', () => {
    const mockData = {
      temperature: 18,
      windSpeed: 12,
      precipitation: 0,
      condition: 'sunny' as const,
    }
    render(<WeatherWidget data={mockData} />)

    // Check temperature
    const tempElement = screen.getByText((content) => content.includes('18') && content.includes('°C'))
    expect(tempElement).toBeInTheDocument()

    // Check wind speed
    expect(screen.getByText((content) => content.includes('12') && content.includes('km/h'))).toBeInTheDocument()

    // Check advice
    const adviceElement = screen.getByText((content) => content.includes('Durchsicht'))
    expect(adviceElement).toBeInTheDocument()
  })
})
