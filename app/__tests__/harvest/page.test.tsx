import { render, screen } from '@testing-library/react'
import HarvestPage from '@/app/harvest/page'

describe('HarvestPage', () => {
  it('renders harvest page headline', () => {
    render(<HarvestPage />)
    expect(screen.getByText('Honig-Ernte dokumentieren und Etiketten erstellen')).toBeInTheDocument()
  })
})
