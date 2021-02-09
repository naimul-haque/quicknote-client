import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <Box
      px={8}
      bg="white"
      position="fixed"
      width="full"
      shadow="base"
      py={3}
      zIndex={100}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image src="/logo.svg" width={145} height={26} />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box mr={6}>
          <Text fontSize="xl" fontWeight={600}>
            Naimul Haque
          </Text>
          <Text fontSize="sm" color="gray.600">
            naimul.on@gmail.com
          </Text>
        </Box>
        <Box w={12} h={12} bg="#A58CEB" rounded="full"></Box>
      </Box>
    </Box>
  )
}
