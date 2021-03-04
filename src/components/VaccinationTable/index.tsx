import * as React from 'react'
import { Table } from 'antd'
import { format, parseISO } from 'date-fns'

export const VaccinationTable = ({ countryData }: any) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => format(parseISO(date), 'dd MMM | yyyy')
    },
    {
      title: 'Daily vaccinations',
      dataIndex: 'daily_vaccinations',
      key: 'daily_vaccinations'
    },
    {
      title: 'Daily vaccinations raw',
      dataIndex: 'daily_vaccinations_raw',
      key: 'daily_vaccinations_raw'
    },
    {
      title: 'Vaccinated people',
      dataIndex: 'people_vaccinated',
      key: 'people_vaccinated'
    },
    {
      title: 'Fully vaccinated people',
      dataIndex: 'people_fully_vaccinated',
      key: 'people_fully_vaccinated'
    },
    {
      title: 'Total vaccinations',
      dataIndex: 'total_vaccinations',
      key: 'total_vaccinations'
    },
    {
      title: 'Total vaccinations per hundred',
      dataIndex: 'total_vaccinations_per_hundred',
      key: 'total_vaccinations_per_hundred'
    }
  ]

  const dataSource = countryData.data.map((item: any, index: number) => ({
    ...item,
    key: index
  }))

  return <Table columns={columns} dataSource={dataSource} />
}
