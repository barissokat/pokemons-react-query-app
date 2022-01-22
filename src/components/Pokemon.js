import { useQuery } from "react-query"

const Pokemon = () => {
  // To subscribe to a query in component, call the 'useQuery' hook with unique query key and function.
  // Query unique key provides refetching, caching and sharing queries throughout in application.
  // Query functions can be any function that returns a promise (resolve the data or throw an error).
  // Query check isLoading, error states and fills the data when success in this application.
  const { isLoading, error, data } = useQuery('pokemons', () =>
    fetch('https://pokeapi.co/api/v2/pokemon/6').then(res => res.json())
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occured: ' + error.message

  return (
    <div>
      <h4>{data.name}</h4>
      <p>weight: {data.weight}</p>
      <p>height: {data.height}</p>
    </div>
  )
}

export default Pokemon
