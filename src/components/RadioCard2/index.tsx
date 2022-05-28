import { Box, VStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { useTheme } from "../../contexts/DefineTheme"

interface RadioCardsProps {
  options: string[],
  defaultValue: string,
  handleData: (theme: string) => void
}

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { theme } = useTheme()
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label' >
      <input {...input} />
      <Box

        {...checkbox}
        w={'60px'}
        fontSize={'12px'}

        textAlign={'center'}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        color={theme.bg.contrastDark}

        _checked={{
          bg: theme.color.secondary,
          color: theme.bg.contrastColor,
          borderColor: 'transparent',
        }}

        me={'6px'}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function RadioCards2({ options, handleData, defaultValue }: RadioCardsProps) {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'theme',
    defaultValue,
    onChange: handleData,
  })

  const { theme } = useTheme()

  const group = getRootProps()

  return (
    <VStack

      display={'grid'}
      gridAutoFlow={'column'}
      gridTemplateRows={'1fr 1fr 1fr'}
      alignItems={'end'}

      justifyContent={'center'}
      {...group}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio} color={theme.bg.contrastColor}>
            {value}
          </RadioCard>
        )
      })}
    </VStack>
  )
}

