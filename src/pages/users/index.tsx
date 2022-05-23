import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w='100%' maxW={1480} mt='6' mx='auto' px={[4, 4, 6]}>

        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8}>

          <Flex mb={8} justify='space-between' align='center'>

            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Link href={'/users/create'} passHref>
              <Button
                as='a' size='sm' fontSize={'sm'}
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo usuário
              </Button>

            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color='gray.300' width={'8'}>
                  <Checkbox colorScheme={'pink'} />
                </Th>

                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th></Th>

              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme={'pink'} />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight={'bold'}>
                      Manuel Molina
                    </Text>

                    <Text fontSize={'sm'} color='gray.300'>
                      manuelanmolina@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td> 22 de Maio, 2022 </Td>}

                <Td>
                  <HStack>
                    <Button
                      as='a' size='sm' pe='0' maxW={'20px'}
                      fontSize={'sm'} colorScheme='yellow'
                      leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                    />

                    <Button
                      as='a' size='sm' ml='4' pe='1' maxW={'20px'}
                      alignContent={'center'}
                      fontSize={'sm'} colorScheme='whiteAlpha'
                      leftIcon={<Icon as={HiOutlineTrash} fontSize='20' />}
                    />
                  </HStack>

                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>

      </Flex>
    </Box>
  )
}