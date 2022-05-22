import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        w='100%'
        mt='6'
        maxW={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />

        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'
        >

          <Flex
            mb={8}
            justify='space-between'
            align='center'
          >
            <Heading
              size='lg'
              fontWeight='normal'
            >
              Usuários
            </Heading>

            <Button
              as='a'
              size='sm'
              fontSize={'sm'}
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo usuário
            </Button>

          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width={'8'}>
                  <Checkbox colorScheme={'pink'} />
                </Th>

                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>

              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
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

                <Td>
                  22 de Maio, 2022
                </Td>

                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize={'sm'}
                    colorScheme='whiteAlpha'
                    leftIcon={<Icon as={RiPencilLine} fontSize='20' />}

                  >
                    Editar
                  </Button>

                  <Button
                    as='a'
                    size='sm'
                    fontSize={'sm'}
                    colorScheme='red'
                    leftIcon={<Icon as={HiOutlineTrash} fontSize='20' />}
                    ml='4'
                  >
                    Excluir
                  </Button>
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