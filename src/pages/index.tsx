import { Button, Flex, useToast, VStack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useTheme } from '../contexts/DefineTheme';
import Head from 'next/head';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm()

  const toast = useToast({
    position: 'top-right',
    isClosable: true,
    duration: 2500,
    containerStyle: {
      width: 'sm'
    }

  })

  const { theme } = useTheme()


  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))


    for (let key in values) {
      if (values[key] === '') {
        toast({
          title: `Preencha o campo ${key}`,
          status: 'error',
        })
        return
      }
    }

    if (!values.email.includes('@') || !values.email.includes('.')) {
      toast({
        title: `E-mail inválido, preencha corretamente`,
        status: 'warning',
      })

      return
    }

    toast({ title: `Login realizado com sucesso`, status: 'success' })

    router.push('/dashboard')
  }

  return (
    <>

      <Head>
        <title>login | dash.go</title>
      </Head>

      <Flex
        w='100vw' h='100vh'
        align='center' justify='center'
        bg={theme.bg.primary}
        color={theme.color.primary}
      >
        <VStack
          as='form' width='100%' maxW={360} p={8} spacing={6}
          bg={theme.bg.secondary} borderRadius={8}
          autoComplete='off'
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Input name='email' type='text' label='E-mail' valueInput={register} />

          <Input name='password' type='password' label='Senha' valueInput={register} />

          <Button type="submit" mt='6' size='lg' w='100%' colorScheme='purple' isLoading={formState.isSubmitting}  >
            Entrar
          </Button>

        </VStack>
      </Flex>
    </>
  )
}


