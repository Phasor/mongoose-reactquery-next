import '@/styles/globals.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a react-query client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return(
   // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>
  )
}
