import { render, screen, fireEvent } from '@testing-library/react'
import { QRScanAnimation } from '@/components/demo/QRScanAnimation'

describe('QRScanAnimation', () => {
  it('renders QR code and scan button', () => {
    render(<QRScanAnimation />)
    expect(screen.getByText('Scan starten')).toBeInTheDocument()
  })

  it('shows success after scan completion', async () => {
    render(<QRScanAnimation />)
    fireEvent.click(screen.getByText('Scan starten'))
    await screen.findByText('Scan abgeschlossen!')
  })
})
