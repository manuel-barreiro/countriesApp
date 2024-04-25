import React from 'react'
import CountryCard from './CountryCard/CountryCard'
import { CountryData } from '@/types'

function CountryCardsGrid({ allCountries }: { allCountries: CountryData[] }): JSX.Element {

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full'>
      {allCountries.map((country, index) => 
        <CountryCard 
          key={index}
          name={country.name} 
          capital={country.capital} 
          states={country.states}
          phone={country.phone}
          emoji={country.emoji}
          emojiU={country.emojiU}
          currencies={country.currencies}
          languages={country.languages}
        />
      )}
    </section> 
  )
}

export default CountryCardsGrid