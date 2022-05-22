import { Button, Flex } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'


export default function SignIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        width='100%'
        maxW={360}
        bg='gray.800'
        p={8}
        borderRadius={8}
        flexDir='column'
        gap={6}
      >
        <Input
          name='email'
          type='email'
          label='E-mail'
        />

        <Input
          name='password'
          type='password'
          label='Senha'
        />

        <Button
          type="submit"
          mt='6'
          size='lg'
          colorScheme='pink'
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
