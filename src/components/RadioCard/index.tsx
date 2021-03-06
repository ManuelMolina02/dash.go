import { Box, VStack, useRadio, useRadioGroup } from "@chakra-ui/react"
import { useTheme } from "../../contexts/DefineTheme"

interface RadioCardsProps {
  options: string[],
  defaultValue: string,
  handleData: (theme: string) => void
}

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
        me={'6px'}
        py={1}
        fontSize={'12px'}
        textAlign={'center'}

        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        color={theme.bg.contrastLight}


        _checked={{
          bg: theme.color.secondary,
          color: theme.bg.contrastDark,
          borderColor: 'transparent',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export function RadioCards({ options, handleData, defaultValue }: RadioCardsProps) {

  const { theme } = useTheme()

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: defaultValue,
    defaultValue,
    onChange: handleData,
  })

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
          <RadioCard key={value} {...radio} color={theme.bg.contrastColor} >
            {value}
          </RadioCard>
        )
      })}
    </VStack>
  )
}

