import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useTheme } from "../../contexts/DefineTheme";


interface InputProps extends ChakraInputProps {
  name: string;
  valueInput: UseFormRegister<FieldValues>
  label?: string;
}

export function Input({ name, label, valueInput, ...rest }: InputProps) {
  const { themeDefined } = useTheme()
  return (
    <FormControl>
      {
        !!label &&
        <FormLabel color={themeDefined.color} htmlFor={name}>
          {label}
        </FormLabel>
      }
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='purple.500'
        bgColor={themeDefined.bg}

        variant={'filled'}
        _hover={{ bg: 'gray.900' }}
        size='lg'
        {...valueInput(name)}
        {...rest}
      />
    </FormControl>
  )
}

