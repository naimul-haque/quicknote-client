import { Box, Grid, GridItem } from '@chakra-ui/react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem>
          {/* sidebar area */}
          <Sidebar />
        </GridItem>
        <GridItem
          colSpan={5}
          maxH="100vh"
          bg="body"
          overflowY="scroll"
          position="relative"
        >
          {/* dashboard content area */}
          <Box pt={24}>{children}</Box>
        </GridItem>
      </Grid>
    </>
  )
}
