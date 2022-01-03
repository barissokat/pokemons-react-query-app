import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example () {
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

export default App
