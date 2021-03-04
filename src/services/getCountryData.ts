export const getCountryData = async (id: string) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json`
  )
  const data = await res.json()
  const countryData = data.find(
    ({ iso_code }: any) => iso_code === id.toUpperCase()
  )

  return countryData
}
