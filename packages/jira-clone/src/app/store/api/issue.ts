import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    endpoints: (builder) => ({
        getIssues: builder.query<
            any, // THIS IS RETURN TYPE
            void // THIS IS QUERY PARAM TYPE FOR query()
        >({
            query: () => `issues`,
        }),
    }),
})

export const { useGetIssuesQuery } = issueApi