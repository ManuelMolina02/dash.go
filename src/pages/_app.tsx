import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { DefineThemeProvider } from '../contexts/DefineTheme'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>

      <ChakraProvider theme={theme}>
        <DefineThemeProvider>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </DefineThemeProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default MyApp
