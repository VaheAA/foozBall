import { baseApi } from '../baseApi';
import { IApiResponse } from '../../types/general';
import { ILeagueResponse } from '../../types/league';


export const leagueApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchLeagues: build.query<ILeagueResponse[], string | undefined>({
      query: (code: string) => ({
        url: '/leagues',
        params: {
          code: code
        },
      }),
      transformResponse: (response: IApiResponse) => {
        return response.response;
      }
    })
  })
});


export const { useFetchLeaguesQuery } = leagueApi;