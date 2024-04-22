import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import CountryDetailPage from "@/components/CountryDetailPage"
import { countriesFullInfo } from "@/constants/countriesFull"
import { loadFullCountryInfo } from "@/lib/functions"



async function page({ params }: { params: { countryCode: string } }) {
  // const allCountriesFullInfo = countriesFullInfo.data.countries.edges
  const countryInfoArray = await loadFullCountryInfo(params.countryCode)
  const countryInfo = countryInfoArray[0]


  return (
    <section className="bg-veryLightGrayBg dark:bg-veryDarkBlueBg flex flex-col gap-20 h-screen">

      <Link href={'/'}>
        <Button className="flex items-center gap-2 dark:bg-darkBlue">
          <ArrowLeft />
          Back
         </Button>
      </Link>

    {countryInfo ?  
      <CountryDetailPage 
        name={countryInfo.node.name} 
        nativeName={countryInfo.node.nativeName}
        population={countryInfo.node.population}
        region={countryInfo.node.region}
        subregion={countryInfo.node.subregion}
        capital={countryInfo.node.capital} 
        topLevelDomain={countryInfo.node.topLevelDomain}
        currencies={countryInfo.node.currencies}
        borders={countryInfo.node.borders}
        languages={countryInfo.node.languages}
        flag={countryInfo.node.flag}
      /> :
        <div>Error</div>
        }

    </section>
  )
}

export default page