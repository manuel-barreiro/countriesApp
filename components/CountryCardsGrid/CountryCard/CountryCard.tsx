import { CountryData } from "@/types"
import Image from "next/image"
import CurrencyChip from "./CountryCardComponents/CurrencyChip"
import LanguageChip from "./CountryCardComponents/LanguagesChip"
import { Separator } from "@/components/ui/separator"

function CountryCard({name, capital, phone, emoji, emojiU, currencies, languages, states}: CountryData): JSX.Element {
  
  return (

        <div className="flex flex-col gap-2 shadow-lg rounded-2xl hover:scale-105 transition-all ease-out duration-500 cursor-pointer font-openSans bg-buttonBorderGray border-cardBgGray border-2 text-white p-6">
          
          {/* To do: abstract the following to CardHeader, CurrencyInfo and LanguageInfo components */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full w-12 h-12 flex justify-center items-center">
              <span className="text-black">{emoji}</span>
            </div>

            <div className="flex flex-col gap-1">

              <p className="text-lg capitalize font-inter font-bold text-[20px]">
                {name}
              </p>

              <div className="flex items-center gap-2 font-openSans text-[12px]">
                <span className="flex items-center gap-1">
                  <Image src={"/location.svg"} alt="capital" width={10} height={10} /> 
                  {capital}
                </span>
                <span className="flex items-center gap-1">
                  <Image src={"/world.svg"} alt="capital" width={12} height={10} /> 
                  {states.length} states
                </span>
                <span className="flex items-center gap-1">
                  <Image src={"/phone.svg"} alt="capital" width={12} height={10} /> 
                  +{phone}
                </span>
              </div>

            </div>

          </div>

          <div className="flex flex-col gap-1">
            <p className="font-openSans text-[16px] font-semibold">Currency</p>
            <div className="flex items-center gap-2">
              {/* If there is more than one currency, show the first and + how many more */}
              {currencies.length > 1 ? 
              (
                <div className="flex gap-2 items-center">
                  <CurrencyChip currency={currencies[0]} />
                  <span>+{currencies.length - 1}</span>
                </div>
              )
                : currencies[0] !== "" ?
              (
                <CurrencyChip currency={currencies[0]} />
              ) :

                <p className="text-sm">No currency data</p>
              }
            </div>
          </div>

          <div className="h-[0.5px] bg-cardBgGray w-full"></div>

          <div className="flex flex-col gap-1">
            <p className="font-openSans text-[16px] font-semibold">Languages</p>
            
            <div className="flex items-center gap-2">
              {/* If there is more than two languages, show the first two and + how many more */}
              { languages.length > 2 ? 
              (
                <div className="flex gap-2 items-center">
                  <LanguageChip language={languages[0].name} />
                  <LanguageChip language={languages[1].name} />
                  <span>+{languages.length - 2}</span>
                </div>
              )
                : 
              
              languages.map((lang,index) => (
                <LanguageChip key={index} language={lang.name} />
              ))

            }
            </div>
            
          </div>
            
        </div>

  )
}

export default CountryCard