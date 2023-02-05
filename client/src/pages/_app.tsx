import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../components/Layout'
import '../style.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 600 * 1000,
    },
  },
})

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Layout />
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
