import Image from "next/image"
import Link from "next/link"
import { CountryCardInfo } from "@/types"

function CountryCard({flag, name, population, region, capital, alpha3Code}: CountryCardInfo) {
  return (

        <div className="flex flex-col shadow-lg rounded-md hover:scale-105 transition-all ease-out duration-500 cursor-pointer dark:bg-darkBlue">
          <Link href={`/${alpha3Code}`}>
            <Image src={flag} alt={`${name} flag`} width={2000} height={1000}/>

            <div className="flex flex-col gap-2 pt-7 pb-12 px-4">
              <p className="font-extrabold text-lg capitalize mb-2">{name}</p>
              <p className="text-sm"><span className="font-bold">Population:</span> {population}</p>
              <p className="text-sm"><span className="font-bold">Region:</span> {region}</p>
              <p className="text-sm"><span className="font-bold">Capital:</span> {capital}</p>
            </div>
          </Link>    
        </div>

  )
}

export default CountryCard