import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem>
        {/* sidebar area */}
        <Sidebar />
      </GridItem>

      <GridItem colSpan={5}>
        {/* dashboard content area */}
        {children}
      </GridItem>
    </Grid>
  )
}
