import { Box, Button } from '@chakra-ui/react'

export default function NavItem({ isActive, icon, text }) {
  return (
    <Button
      color={isActive ? 'primary' : 'gray.600'}
      fontWeight={600}
      variant="link"
      fontSize="xl"
      isFullWidth
      justifyContent="flex-start"
      leftIcon={icon}
      _hover={{ border: 'none' }}
      _focus={{ outline: 'none' }}
      mb={6}
    >
      <Box as="p" ml={1}>
        {text}
      </Box>
    </Button>
  )
}
