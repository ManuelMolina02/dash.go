import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight='bold'
      letterSpacing={'tight'}
      w='64'
    >
      dash
      <Text as='span' color='purple.500' mx='1'>.</Text>
      go
    </Text>
  )
}