import { render, screen } from '@testing-library/react'
import DemoPage from '@/app/demo/page'

describe('DemoPage', () => {
  it('renders demo headline', () => {
    render(<DemoPage />)
    expect(screen.getByText('QR-Code scannen und Bienenstock in 30 Sekunden dokumentieren')).toBeInTheDocument()
  })

  it('renders QRScanAnimation', () => {
    render(<DemoPage />)
    expect(screen.getByText('Scan starten')).toBeInTheDocument()
  })
})
