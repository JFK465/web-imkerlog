import { render, screen } from '@testing-library/react'
import WeatherPage from '@/app/weather/page'

describe('WeatherPage', () => {
  it('renders weather page headline', () => {
    render(<WeatherPage />)
    expect(screen.getByText('Wetter und Varroa-Prognose für Ihren Bienenstand')).toBeInTheDocument()
  })
})
