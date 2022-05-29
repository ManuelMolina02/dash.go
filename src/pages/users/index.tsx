import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, ScaleFade, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useTheme } from "../../contexts/DefineTheme";
import { useEffect, useState } from "react";

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  const [renderAnimation, setRenderAnimation] = useState(false)

  useEffect(() => {
    setRenderAnimation(true)
  }, [])

  const { theme } = useTheme()


  return (
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
                <Tr>
                  <Td px={[4, 4, 6]}>
                    <Checkbox colorScheme={theme.color.name} />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight={'bold'}>
                        User Example 1
                      </Text>

                      <Text fontSize={'sm'} color='gray.300'>
                        user.example1@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  {isWideVersion && <Td> 22 de Maio, 2022 </Td>}

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

                <Tr>
                  <Td px={[4, 4, 6]}>
                    <Checkbox colorScheme={theme.color.name} />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight={'bold'}>
                        User Example 4
                      </Text>

                      <Text fontSize={'sm'} color='gray.300'>
                        user.example4@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  {isWideVersion && <Td> 22 de Maio, 2022 </Td>}

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

                <Tr>
                  <Td px={[4, 4, 6]}>
                    <Checkbox colorScheme={theme.color.name} />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight={'bold'}>
                        User Example 5
                      </Text>

                      <Text fontSize={'sm'} color='gray.300'>
                        user.example5@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  {isWideVersion && <Td> 22 de Maio, 2022 </Td>}

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
                <Tr>
                  <Td px={[4, 4, 6]}>
                    <Checkbox colorScheme={theme.color.name} />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight={'bold'}>
                        User Example 6
                      </Text>

                      <Text fontSize={'sm'} color='gray.300'>
                        user.example6@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  {isWideVersion && <Td> 22 de Maio, 2022 </Td>}

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
              </Tbody>
            </Table>

            <Pagination />

          </Box>

        </ScaleFade >
      </Flex>
    </Box >
  )
}