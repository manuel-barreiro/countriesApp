import CountryCardsGrid from "@/components/CountryCardsGrid/CountryCardsGrid";
import SearchBar from "@/components/SearchBar/SearchBar";
import PaginationComponent from "@/components/Pagination/Pagination";
// import { loadAllCountries } from "@/lib/functions";
import { mockData } from "@/constants/dataTrevor";
import { loadAllCountries } from "@/lib/functions";
import { CountryData } from "@/types";

  //Consume mock data to start painting the UI
 // const allCountries: CountryData[]  = mockData.data.countries

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Consume Countries GraphQL API with Apollo via loadAllCountries function
 const allCountries: CountryData[]  = await loadAllCountries()

 // Page number taken from URL
  let page = searchParams['page'] ?? 1
  // Hard coded number of cards shown per page (can also add functionality and get it from searchParams)
  const per_page = 12

  // Calculate total number of pages
  const pagesNum = Math.ceil(allCountries.length / per_page)

  // Reset to first page if these conditions apply
  if (Number(page) < 1 || Number(page) > pagesNum ) {
    page = 1
  }

  // Start and end variables calculated to slice the data array and only show those results
  const start = (Number(page) - 1) * Number(per_page) // 0, 12, 24 ...
  const end = start + Number(per_page) // 12, 24, 36 ...
  const displayedCountries = allCountries.slice(start, end)

  return (
    <main className="flex flex-col items-center gap-10 px-8 md:px-10 py-20">
      <SearchBar />
      <CountryCardsGrid allCountries={displayedCountries} />
      <PaginationComponent hasNextPage={end < allCountries.length} hasPrevPage={start > 0} perPage={per_page} pagesNum={pagesNum} />
    </main>
  );
}
