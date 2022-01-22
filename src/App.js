import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Pokemon from './components/Pokemon'

// Create a client
const queryClient = new QueryClient()

function App () {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Pokemon />
    </QueryClientProvider>
  )
}

export default App
