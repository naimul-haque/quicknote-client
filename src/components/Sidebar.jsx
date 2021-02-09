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
    <Box minH="100vh" bg="white" shadow="base">
      <Box pt={28} px={8}>
        <NavItem isActive icon={DashboardIcon} text="Dashboard" />
        <NavItem icon={FolderIcon} text="My Space" />
        <NavItem icon={NoteIcon} text="Notes" />
        <NavItem icon={TagIcon} text="Tags" />
      </Box>
    </Box>
  )
}
