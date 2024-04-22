import { getClient } from "@/lib/apollo/apolloClient";
import { CountryData } from "@/types";
import { gql } from "@apollo/client";

// Query API using Apollo Client
export async function loadAllCountries(): Promise<CountryData[]> {
  const { data } = await getClient().query({
    query: gql`
      query {
        countries {
          name
          capital
          states {
            name
          }
          phone
          emoji
          emojiU
          currencies
          languages {
            name
          }
        }
      }
   `,
  });
  return data.countries
}


