import { render, screen } from '@testing-library/react'
import '../../tests/matchMedia.mock'

import { VaccinationTable } from '.'

const mockData = {
  country: 'Denmark',
  iso_code: 'DNK',
  data: [
    {
      date: '2020-12-27',
      total_vaccinations: 6469,
      people_vaccinated: 6469,
      total_vaccinations_per_hundred: 0.11,
      people_vaccinated_per_hundred: 0.11
    },
    {
      date: '2020-12-28',
      total_vaccinations: 8451,
      people_vaccinated: 8451,
      daily_vaccinations_raw: 1982,
      daily_vaccinations: 1982,
      total_vaccinations_per_hundred: 0.15,
      people_vaccinated_per_hundred: 0.15,
      daily_vaccinations_per_million: 342
    }
  ]
}

describe('VaccinationTable', () => {
  it('should render the table header', () => {
    const { container } = render(<VaccinationTable countryData={mockData} />)

    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('27 Dec | 2020')).toBeInTheDocument()

    expect(screen.getByText('Daily vaccinations')).toBeInTheDocument()
    expect(screen.getByText('Daily vaccinations raw')).toBeInTheDocument()
    expect(screen.getByText('Vaccinated people')).toBeInTheDocument()
    expect(screen.getByText('Fully vaccinated people')).toBeInTheDocument()
    expect(screen.getByText('Total vaccinations')).toBeInTheDocument()
    expect(
      screen.getByText('Total vaccinations per hundred')
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
