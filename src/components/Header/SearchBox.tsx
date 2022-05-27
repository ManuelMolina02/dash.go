import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useTheme } from "../../contexts/DefineTheme";

export function SearchBox() {
  const { themeDefined } = useTheme()
  return (
    <Flex
      as='label' position='relative' align='center'
      flex='1' py='4' px='8' ml='6' maxW={400}
      bg={themeDefined.bgCards} color='gray.200' borderRadius='full'
    >

      <Input
        color={themeDefined.color} variant='unstyled'
        px='4' mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
      />

      <Icon as={RiSearchLine} size='20' />
    </Flex>
  )
}