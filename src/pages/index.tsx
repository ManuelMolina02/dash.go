import { Button, Flex, VStack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'


export default function SignIn() {
  return (
    <Flex
      w='100vw' h='100vh'
      align='center' justify='center'
    >
      <VStack
        as='form' width='100%' maxW={360} p={8} spacing={6}
        bg='gray.800' borderRadius={8}
      >
        <Input name='email' type='email' label='E-mail' />

        <Input name='password' type='password' label='Senha' />

        <Button type="submit" mt='6' size='lg' colorScheme='purple'  >
          Entrar
        </Button>

      </VStack>
    </Flex>
  )
}
