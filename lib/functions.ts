import { getClient } from "@/lib/apollo/apolloClient";
import { CountryCardInfo, CountryDetailInfo } from "@/types";
import { gql } from "@apollo/client";

// Query API using Apollo Client, for server components
export async function loadAllCountries(): Promise<[{node: CountryCardInfo}]> {
  const { data } = await getClient().query({
    query: gql`
      query {
        countries {
          edges {
            node {
              name
              capital
              region
              population
              alpha3Code
              flag
            }
          }
        }
      }
   `,
  });
  return data.countries.edges
}



export async function loadFullCountryInfo(alpha3Code: string): Promise<[{node: CountryDetailInfo}]> {
  const query = `
  query getCountryInfo ($alpha3Code: String){
    countries(alpha3Code: ${alpha3Code}) {
      edges {
        node {
          name
          alpha3Code
          capital
          nativeName
          region
          subregion
          population
          topLevelDomain
          borders
          currencies{
            edges{
              node{
                name
              }
            }
          }
          languages{
            edges{
              node{
                name
              }
            }
          }
          flag
        }
      }
    }
  }
  `
  const { data } = await getClient().query({
    query: gql(query),
  });
  return data.countries.edges
}