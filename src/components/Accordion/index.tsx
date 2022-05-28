import { Accordion as ChakraAccordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BiPaintRoll } from "react-icons/bi";
import { TiBrush } from 'react-icons/ti'
import { useTheme } from "../../contexts/DefineTheme";
import { RadioCards } from '../RadioCard'
import { RadioCards2 } from "../RadioCard2";


export function Accordion() {
  const { theme, variablesTheme } = useTheme()
  const options = [...variablesTheme.colorsMatch].map(color => color.name)

  return (
    <ChakraAccordion allowToggle w='140px'  >
      <AccordionItem boxShadow={'transparent'} borderColor={'transparent'} >

        <AccordionButton
          color={theme.bg.contrastLight}
          _expanded={{ color: theme.color.primary, fontWeight: 'bold' }}

          _focus={{ color: 'none' }}
          _hover={{ textDecor: 'underline' }}
          px={0}>
          <HStack flex='1' textAlign='left' >
            <Icon as={BiPaintRoll} />


            <Text >
              Cor de Fundo
            </Text>

          </HStack>
          {/* <AccordionIcon /> */}
        </AccordionButton>

        <AccordionPanel pb={4}>
          <RadioCards
            options={['dark', 'light', 'purple']}
            handleData={variablesTheme.setState.setBackground}
            defaultValue={variablesTheme.state.background} />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem boxShadow={'transparent'} borderColor={'transparent'} >

        <AccordionButton
          color={theme.bg.contrastLight}
          _expanded={{ color: theme.color.primary, fontWeight: 'bold' }}
          _focus={{ color: 'none' }}
          _hover={{ textDecor: 'underline' }}
          px={0}
        >
          <HStack flex='1' textAlign='left' >
            <Icon as={TiBrush} />


            <Text >
              Cor de Texto
            </Text>

          </HStack>
          {/* <AccordionIcon /> */}
        </AccordionButton>

        <AccordionPanel pb={4}  >
          {

            theme.bg.name === 'dark' &&

            <RadioCards2
              options={options}
              handleData={variablesTheme.setState.setColor}
              defaultValue={'purple'}
            />
          }
          {

            theme.bg.name === 'light' &&

            <RadioCards2
              options={options}
              handleData={variablesTheme.setState.setColor}
              defaultValue={'purple'}
            />
          }

          {
            theme.bg.name === 'purple' &&

            <RadioCards2
              options={options}
              handleData={variablesTheme.setState.setColor}
              defaultValue={'orange'}

            />
          }
        </AccordionPanel>
      </AccordionItem>

    </ChakraAccordion >
  )
}