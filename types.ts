export interface CountryCardInfo {
  name: string,
  capital: string,
  region: string,
  population: number,
  flag: string,
  alpha3Code: string
}

export interface CountryDetailInfo {
  name: string;
  alpha3Code: string;
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