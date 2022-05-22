import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h='20'
      maxW={1480}
      mx='auto'
      px={6}
      mt={4}
      align='center'
    >
      <Text
        fontSize='26'
        fontWeight='bold'
        letterSpacing={'tight'}
        w='64'
      >
        dash
        <Text as='span' color='pink.500' mx='1'>.</Text>
        go
      </Text>



      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxW={400}
        align='center'
        color={'gray.200'}
        position='relative'
        bg='gray.800'
        borderRadius={'full'}
      >

        <Input
          color={'gray.50'}
          variant='unstyled'
          placeholder='Buscar na plataforma'
          px='4'
          mr='4'
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} size='20' />

      </Flex>

      <Flex
        align={'center'}
        ml='auto'
      >
        <HStack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color='gray.300'
          borderRightWidth={1}
          borderColor={'gray.700'}
        >
          <Icon as={RiNotificationLine} size='20' />
          <Icon as={RiUserAddLine} size='20' />
        </HStack>

        <Flex
          align={'center'}
        >

          <Box
            mr={4}
            textAlign='right'
          >
            <Text>Manuel Molina</Text>
            <Text
              color={'gray.300'}
              fontSize={'sm'}
            >
              manuelanmolina@gmail.com
            </Text>

          </Box>

          <Avatar size={'md'} name='Manuel Molina' src="https://github.com/ManuelMolina02.png" />

        </Flex>

      </Flex>
    </Flex>
  )
}