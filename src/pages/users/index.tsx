import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Link, ScaleFade, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import NextLink from "next/link";
import { useTheme } from "../../contexts/DefineTheme";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList() {

  const { theme } = useTheme()
  const [renderAnimation, setRenderAnimation] = useState(false)
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    setRenderAnimation(true)
  }, [])


  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

  return (
    <>
      <Head>
        <title>users | dash.go</title>
      </Head>

      <Box transition={'.25s ease-in-out '} bg={theme.bg.primary}
        color={theme.color.primary}>
        <Header />

        <Flex w='100%' maxW={1480} mt='6' mx='auto' px={[4, 4, 6]} >

          <Sidebar />

          <ScaleFade in={renderAnimation} initialScale={.8} delay={.175} unmountOnExit >
            <Box w={'82vw'} maxW={'1220px'} flex='1' p='8' mb='10rem' bg={theme.bg.secondary} color={theme.bg.contrastLight} borderRadius={8} >

              <Flex mb={8} justify='space-between' align='center'>

                <Heading size='lg' fontWeight='normal'>
                  Usuários

                  {
                    isLoading && isFetching && <Spinner size='sm' ml='4' color="gray.500" />
                  }
                </Heading>

                <NextLink href={'/users/create'} passHref>
                  <Button
                    as='a' size='sm' fontSize={'sm'}
                    bg={theme.color.tertiary}
                    _hover={{
                      filter: 'brightness(1.2)',
                    }}

                    color={theme.color.contrastLight}
                    leftIcon={<Icon as={RiAddLine} fontSize='20' />
                    }
                  >
                    Criar novo usuário
                  </Button>

                </NextLink>
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
                          data.users.map(user => {
                            return (

                              <Tr key={user.id}>
                                <Td px={[4, 4, 6]}>
                                  <Checkbox colorScheme={theme.color.name} />
                                </Td>

                                <Td>
                                  <Box>
                                    <Link color={theme.color.primary} onMouseEnter={() => handlePrefetchUser(user.id)}>
                                      <Text fontWeight={'bold'}>
                                        {user.name}
                                      </Text>
                                    </Link>

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

                    <Pagination
                      totalCountOfRegisters={data.totalCount}
                      currentPage={page}
                      onChangePage={setPage}
                    />
                  </>
                )}

            </Box>

          </ScaleFade >
        </Flex>
      </Box >
    </>
  )
}