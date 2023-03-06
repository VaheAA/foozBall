import { baseApi } from '../baseApi';


export const countryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllCountries: build.query<void, void>({
      query: () => ({
        url: '/countries',
      }),
    })
  })
});



export const { useFetchAllCountriesQuery } = countryApi;