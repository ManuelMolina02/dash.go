import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as='label' position='relative' align='center'
      flex='1' py='4' px='8' ml='6' maxW={400}
      bg='gray.800' color='gray.200' borderRadius='full'
    >

      <Input
        color='gray.50' variant='unstyled'
        px='4' mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} size='20' />
    </Flex>
  )
}