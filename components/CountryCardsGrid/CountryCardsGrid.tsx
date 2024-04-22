import React from 'react'
import CountryCard from './CountryCard'
import { CountryCardInfo } from '@/types'
import Link from 'next/link'

type CountryGridProps = {
  allCountries: [{node: CountryCardInfo}]
}

function CountryCardsGrid({ allCountries }: CountryGridProps) {

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 px-14'>
      {allCountries.map((country, index) => 
        <CountryCard 
          key={index}
          name={country.node.name} 
          capital={country.node.capital} 
          region={country.node.region} 
          alpha3Code={country.node.alpha3Code} 
          population={country.node.population} 
          flag={country.node.flag} 
        />
      )}
    </section> 
  )
}

export default CountryCardsGrid