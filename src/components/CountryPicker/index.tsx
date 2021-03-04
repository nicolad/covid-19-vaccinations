import * as React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Select } from 'antd'

const { Option } = Select

const Heading = styled.h1`
  display: inline-flex;
  margin-right: 10px;
  padding-bottom: 0;
`

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}

export const CountryPicker = ({ countries, selectedCountryCode }: any) => {
  const router = useRouter()

  const selectedCountry = countries.find(
    ({ value }) => value === selectedCountryCode.toUpperCase()
  )

  function onChange(value) {
    router.push(value)
    console.log(`selected ${value}`)
  }

  return (
    <>
      <Heading>Vaccinations in {selectedCountry?.label} |</Heading>
      <Select
        showSearch
        style={{ width: 200 }}
        defaultValue={selectedCountry?.label}
        placeholder="Select a country"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {countries.map(({ label, value }: any) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </>
  )
}
