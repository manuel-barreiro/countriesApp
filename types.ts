export interface CountryData {
  name: string;
  capital: string | null;
  states: { name: string }[];
  phone: string;
  emoji: string;
  emojiU: string;
  currencies: string[];
  languages: { name: string }[];
}
