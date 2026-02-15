import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QuickFormDemo } from '@/components/demo/QuickFormDemo'

describe('QuickFormDemo', () => {
  it('renders form fields', () => {
    render(<QuickFormDemo />)
    expect(screen.getByText('Biene gesichtet?')).toBeInTheDocument()
    expect(screen.getByText('Varroa-Befall?')).toBeInTheDocument()
    expect(screen.getByText('Bemerkungen')).toBeInTheDocument()
  })

  it('shows success after form submission', async () => {
    render(<QuickFormDemo />)
    // Click first "Ja" button (Biene gesichtet)
    const buttons = screen.getAllByRole('button', { name: 'Ja' })
    fireEvent.click(buttons[0])
    // Click second "Ja" button (Varroa-Befall)
    fireEvent.click(buttons[1])
    // Click submit button
    fireEvent.click(screen.getByRole('button', { name: 'Absenden' }))
    await waitFor(() => {
      expect(screen.getByText('✓ Erfolgreich dokumentiert')).toBeInTheDocument()
    }, { timeout: 1000 })
  })
})
