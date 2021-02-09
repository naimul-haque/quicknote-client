import { Box } from '@chakra-ui/react'
import NavItem from './common/NavItem'
import Image from 'next/image'

import {
  DashboardIcon,
  TagIcon,
  NoteIcon,
  FolderIcon,
} from '../components/common/Icons'

export default function Sidebar() {
  return (
    <>
      <Box minH="100vh" bg="white">
        <Box px={8} py={8}>
          <Image src="/logo.svg" width={145} height={26} />
        </Box>
        <Box pt={12} px={8}>
          <NavItem isActive icon={DashboardIcon} text="Dashboard" />
          <NavItem icon={FolderIcon} text="My Space" />
          <NavItem icon={NoteIcon} text="Notes" />
          <NavItem icon={TagIcon} text="Tags" />
        </Box>
      </Box>
    </>
  )
}
