import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, useToast, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";




interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm()

  const toast = useToast({
    position: 'top-right',
    isClosable: true,
    duration: 3000,
    containerStyle: {
      width: 'sm'
    }

  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    let erros = []

    for (let key in values) {
      if (values[key] === '') {
        erros.push(key)
      }
    }

    if (erros.length > 0) {
      toast({
        title: `Os campos: ${erros.join(', ')} são obrigatórios!`,
        status: 'error',
      })
      return
    }

    if (!values.email.includes('@') || !values.email.includes('.')) {
      toast({
        title: `E-mail inválido, preencha corretamente`,
        status: 'warning',
      })

      return
    }

    if (values.password.length < 6) {
      toast({
        title: `Senha deve conter no mínimo 6 caracteres`,
        status: 'warning',
      })

      return
    }
    if (values.password !== values.password_confirmation) {
      toast({
        title: `As senhas não coincidem`,
        status: 'warning',
      })

      return
    }

  }


  return (
    <Box>
      <Header />
      <Flex w='100%' maxW={1480} mt='6' mx='auto' px='6'>
        <Sidebar />
        <Box as='form' onSubmit={handleSubmit(handleCreateUser)}
          flex='1' p={[6, 8]} bg='gray.800'
          borderRadius={8}
        >
          <Heading size='lg' fontWeight='normal'>
            Criar novo usuário
          </Heading>

          <Divider my='6' borderColor={'gray.700'} />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={'240px'} spacing={[6, 8]} w='100%'>
              <Input name="name" label="Nome completo" valueInput={register} />
              <Input name="email" label="E-mail" valueInput={register} />
            </SimpleGrid>

            <SimpleGrid minChildWidth={'240px'} spacing={[6, 8]} w='100%'>
              <Input name="password" type={'password'} label="Senha" valueInput={register} />
              <Input name="passwordConfirmation" type={'password'} label="Confirmação senha" valueInput={register} />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify={'flex-end'}>
            <HStack spacing={'4'}>

              <Link href={'/users'} passHref>
                <Button as='a' colorScheme={'whiteAlpha'}>Cancelar</Button>
              </Link>

              <Button colorScheme={'purple'} isLoading={formState.isSubmitting} type='submit'>Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}