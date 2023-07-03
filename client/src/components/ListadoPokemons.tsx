import React from "react"
import ListadoPokemonsItem from "../components/ListadoPokemonsItem"
import { Pokemon } from "../types/pokemon.types"
import { gql, useQuery } from "@apollo/client"

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */

export const getPokemon = gql`
  query getPokemons {
    pokemons {
      name
      image
    }
  }
`

const ListadoPokemons = () => {
  const { data, loading } = useQuery(getPokemon)

  if (loading) return <div>Cargando pokemons...</div>
  if (!data?.pokemons) return <></>

  return (
    <div className="listado">
      {data.pokemons &&
        data.pokemons.map((pokemon: Pokemon) => (
          <ListadoPokemonsItem pokemon={pokemon} key={pokemon.name} />
        ))}
    </div>
  )
}

export default ListadoPokemons
