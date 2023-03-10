import { ICountry } from './country';

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface ISeason {
  year: number;
  start: string;
  end: string;
  current: false;
}

export interface ILeagueResponse {
  league: ILeague;
  country: ICountry;
  seasons: ISeason[];
}