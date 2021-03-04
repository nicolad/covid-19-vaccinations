export const getAllCountries = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json`
  )
  const data = await res.json()
  const countries = data.map(({ country, iso_code }: any) => ({
    label: country,
    value: iso_code
  }))

  return countries
}
