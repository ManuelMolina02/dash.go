import { Text } from "@chakra-ui/react";

interface LogoProps {
  color?: string;
  contrast?: string;
}

export function Logo({ color, contrast }: LogoProps) {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight='bold'
      letterSpacing={'tight'}
      w='64'
      color={contrast}
    >
      dash
      <Text as='span' color={color} mx='1'>.</Text>
      go
    </Text>
  )
}