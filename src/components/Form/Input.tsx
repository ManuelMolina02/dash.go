import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";


interface InputProps extends ChakraInputProps {
  name: string;
  valueInput: UseFormRegister<FieldValues>
  label?: string;
}

export function Input({ name, label, valueInput, ...rest }: InputProps) {
  return (
    <FormControl>
      {
        !!label &&
        <FormLabel htmlFor={name}>
          {label}
        </FormLabel>
      }
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='purple.500'
        bgColor='gray.900'
        variant={'filled'}
        _hover={{ bg: 'gray.900' }}
        size='lg'
        {...valueInput(name)}
        {...rest}
      />
    </FormControl>
  )
}

