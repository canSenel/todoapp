import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  }),
  endpoints: (builder: any) => ({
    getPokemonByName: builder.query({
      query: (name: any) => `pokemon/${name}`
    })
  })
});

export const { useGetPokemonByNameQuery } = pokemonApi;
