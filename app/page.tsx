import CountryCardsGrid from "@/components/CountryCardsGrid/CountryCardsGrid";
import { loadAllCountries } from "@/lib/functions";
import { CountryCardInfo } from "@/types";

export default async function Home() {
  const allCountries: [{node: CountryCardInfo}] = await loadAllCountries()

  return (
    <main className="bg-veryLightGrayBg dark:bg-veryDarkBlueBg">
      <CountryCardsGrid allCountries={allCountries} />
    </main>
  );
}
