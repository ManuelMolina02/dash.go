import { Accordion as ChakraAccordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Icon, Text } from "@chakra-ui/react";
import { BiPaintRoll } from "react-icons/bi";
import { TiBrush } from 'react-icons/ti'
import { useTheme } from "../../contexts/DefineTheme";
import { RadioCards } from '../RadioCard'
import { RadioCards2 } from "../RadioCard2";


export function Accordion() {
  const { themeDefined, theme, setTheme, colorsMatch, color, setColor } = useTheme()


  const options = [...colorsMatch].map(color => color.name)


  return (
    <ChakraAccordion allowToggle w='140px'  >
      <AccordionItem boxShadow={'transparent'} borderColor={'transparent'} >

        <AccordionButton
          _expanded={{ color: themeDefined.colorActive, fontWeight: 'bold' }}

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
            handleData={setTheme}
            defaultValue={theme} />
        </AccordionPanel>
      </AccordionItem>


      <AccordionItem boxShadow={'transparent'} borderColor={'transparent'} >

        <AccordionButton
          _expanded={{ color: themeDefined.colorActive, fontWeight: 'bold' }}

          _focus={{ color: 'none' }}
          _hover={{ textDecor: 'underline' }}
          px={0}>
          <HStack flex='1' textAlign='left' >
            <Icon as={TiBrush} />


            <Text >
              Cor de Texto
            </Text>

          </HStack>
          {/* <AccordionIcon /> */}
        </AccordionButton>

        <AccordionPanel pb={4}>
          <RadioCards2
            options={options}
            handleData={setColor}
            defaultValue={color} />
        </AccordionPanel>
      </AccordionItem>

    </ChakraAccordion >
  )
}