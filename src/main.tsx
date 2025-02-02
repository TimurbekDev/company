import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { AuthContextProvider } from './context/AuhtContext.tsx'

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,
      //@ts-ignore
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: true
    }
  }
})

createRoot(document.getElementById('root')! as HTMLElement).render(
  <AuthContextProvider>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </AuthContextProvider>
)
