import Image from "next/image";

type CountryDetailPageProps = {
    name: string;
    capital: string;
    nativeName: string;
    region: string;
    subregion: string;
    population: number;
    topLevelDomain: string[];
    borders: string[];
    currencies: ({
      node: {
          name: string;
      };
  } | {
      node: {
          name: null;
      };
  })[];
    languages: {
      edges: {
          node: {
              name: string;
          };
      }[];
  };
    flag: string;
};


function CountryDetailPage({ 
  name,
  capital,
  nativeName,
  region,
  subregion,
  population,
  topLevelDomain,
  borders,
  currencies,
  languages,
  flag }: CountryDetailPageProps): JSX.Element {
  return (
    <div className="w-full grid grid-cols-2 gap-10 items-center">
      <div className="">
        <Image src={flag} alt="flag" width={10000} height={100} className="object-cover" />
      </div>

      <div className="flex flex-col justify-start">
        <h2 className="text-3xl font-extrabold">{name}</h2>

        <div className="flex w-full">

          <div className="basis-1/2 flex flex-col">
            <p><span>Native Name:</span> {nativeName}</p>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>subregion:</span>{ subregion}</p>
            <p><span>Capital:</span> {capital}</p>
          </div>

          <div className="basis-1/2 flex flex-col">
            <p><span>Top Level Domain:</span> {topLevelDomain}</p>
            <p><span>Currencies:</span>{}</p>
            <p><span>Languages:</span>{}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CountryDetailPage