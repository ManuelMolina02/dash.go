import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, ScaleFade, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { useQuery } from 'react-query'

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useTheme } from "../../contexts/DefineTheme";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {

    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
      }
    })

    return users
  }, {
    staleTime: 1000 * 5, // 5 seconds
  });
  const { theme } = useTheme()
  const [renderAnimation, setRenderAnimation] = useState(false)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    setRenderAnimation(true)
  }, [])




  return (
    <>
      <Head>
        <title>users | dash.go</title>
      </Head>
      <Box bg={theme.bg.primary} color={theme.color.primary} h={'100vh'} transition={'.25s ease-in-out '}>
        <Header />

        <Flex w='100%' maxW={1480} mt='6' mx='auto' px={[4, 4, 6]} >

          <Sidebar />

          <ScaleFade in={renderAnimation} initialScale={.8} delay={.175} unmountOnExit >
            <Box w={'82vw'} maxW={'1220px'} flex='1' p='8' bg={theme.bg.secondary} color={theme.bg.contrastLight} borderRadius={8} >

              <Flex mb={8} justify='space-between' align='center'>

                <Heading size='lg' fontWeight='normal'>
                  Usuários
                </Heading>

                <Link href={'/users/create'} passHref>
                  <Button
                    as='a' size='sm' fontSize={'sm'}
                    bg={theme.color.tertiary}
                    _hover={{
                      filter: 'brightness(1.2)',
                    }}

                    color={theme.color.contrastLight}

                    leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                  >
                    Criar novo usuário
                  </Button>

                </Link>
              </Flex>

              {
                isLoading ? (
                  <Flex justify={'center'}>
                    <Spinner size='xl' />
                  </Flex>
                ) : error ? (
                  <Flex justify={'center'}>
                    <Text fontSize={'sm'}>
                      Falha ao obter dados dos usuários
                    </Text>
                  </Flex>
                ) : (
                  <>
                    <Table colorScheme='whiteAlpha' overflowY={'scroll'}  >
                      <Thead >
                        <Tr>
                          <Th px={[4, 4, 6]} color='gray.300' width={'8'}>
                            <Checkbox colorScheme={theme.color.name} />
                          </Th>

                          <Th color={theme.bg.contrastLight}>Usuário</Th>
                          {isWideVersion && <Th color={theme.bg.contrastLight}>Data de cadastro</Th>}
                          <Th></Th>

                        </Tr>
                      </Thead>

                      <Tbody overflowY={'hidden'} maxHeight={'300px'}>
                        {
                          data.map(user => {
                            return (

                              <Tr key={user.id}>
                                <Td px={[4, 4, 6]}>
                                  <Checkbox colorScheme={theme.color.name} />
                                </Td>

                                <Td>
                                  <Box>
                                    <Text fontWeight={'bold'}>
                                      {user.name}
                                    </Text>

                                    <Text fontSize={'sm'} color='gray.300'>
                                      {user.email}
                                    </Text>
                                  </Box>
                                </Td>

                                {isWideVersion && <Td> {user.createdAt} </Td>}

                                <Td>
                                  <HStack spacing={[4]}>
                                    <Button
                                      as='a' size='sm' pe='0' maxW={'20px'}
                                      fontSize={'sm'} color={'gray.50'} bg={theme.color.tertiary} cursor={'pointer'} _hover={{ bg: `${theme.color.name}.500` }}
                                      leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                                    />

                                    <Button
                                      as='a' size='sm' ml='4' pe='1' maxW={'20px'}
                                      alignContent={'center'} cursor={'pointer'}
                                      fontSize={'sm'} colorScheme={theme.bg.name !== 'light' ? 'whiteAlpha' : 'blackAlpha'}
                                      leftIcon={<Icon as={HiOutlineTrash} fontSize='20' />}
                                    />
                                  </HStack>

                                </Td>
                              </Tr>

                            )
                          })
                        }

                      </Tbody>
                    </Table>

                    <Pagination />
                  </>
                )}

            </Box>

          </ScaleFade >
        </Flex>
      </Box >
    </>
  )
}