import { useRouter } from 'next/router'

import { CountryPicker, VaccinationTable } from '../../components'
import { getAllCountries, getCountryData } from '../../services'

const Post = ({ countries, countryData }) => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <CountryPicker countries={countries} selectedCountryCode={pid} />
      <VaccinationTable countryData={countryData} />
    </>
  )
}

export default Post

export async function getServerSideProps({ query }) {
  const countries = await getAllCountries()
  const countryData = await getCountryData(query.pid)

  return { props: { countries, countryData } }
}
