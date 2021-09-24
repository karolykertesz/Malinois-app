import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api_key = "563492ad6f917000010000014e874091f34e4fe9b8a3a3d9d438dd2b"
export const MaliStart = createApi({
  reducerPath: "maliStart",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.pexels.com/v1/search`,
    prepareHeaders(headers){
      headers.set("x-api-key",api_key)
      return headers
    }

    
  }),
endpoints(builder){
return {
fetchMalis: builder.query({
  query(limit= 10){
    return `/dogs?page=1&per_page=${limit}&`
  }
})
}
}
})

export const {useFetchMalisQuery} = MaliStart