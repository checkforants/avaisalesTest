import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface ISearchId {
	searchId2: number

  }
export const ticketsApi = createApi({
	reducerPath: 'ticketsApi',
	baseQuery: fetchBaseQuery({baseUrl:'https://front-test.dev.aviasales.ru/'}),
	endpoints: (build)=>({
		getSearchId2: build.query<ISearchId, any>({
			query: ()=>'search'
		}),
	})
})

export const {useGetSearchId2Query} = ticketsApi