import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as='header' align='center'
      w='100%' h='20' maxW={1480}
      mx='auto' px={6}
      pt={5}
    >
      {
        !isWideVersion && (
          <IconButton
            fontSize={'24'}
            aria-label='Open navigation'
            icon={<Icon as={RiMenuLine} />}
            onClick={onOpen}
            mr='2'
            colorScheme={'dark'}
          >

          </IconButton>
        )
      }

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align={'center'} ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )
}