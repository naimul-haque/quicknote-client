import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Fonts from '../styles/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="body" minH="100vh">
        <Fonts />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
