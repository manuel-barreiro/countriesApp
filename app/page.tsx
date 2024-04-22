import CountryCardsGrid from "@/components/CountryCardsGrid/CountryCardsGrid";
import SearchBar from "@/components/SearchBar/SearchBar";
import PaginationComponent from "@/components/Pagination/Pagination";
// import { loadAllCountries } from "@/lib/functions";
import { mockData } from "@/constants/dataTrevor";
import { loadAllCountries } from "@/lib/functions";
import { CountryData } from "@/types";

export default async function Home() {
  // Consume Countries GraphQL API with Apollo via loadAllCountries function
  const allCountries: CountryData[]  = await loadAllCountries()

  //Consume mock data to start painting the UI
  // const allCountries: CountryData[]  = mockData.data.countries

  return (
    <main className="flex flex-col items-center gap-10 px-8 md:px-14 py-20">
      <SearchBar />
      <CountryCardsGrid allCountries={allCountries} />
      <PaginationComponent />
    </main>
  );
}
