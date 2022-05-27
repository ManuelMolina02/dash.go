import { Text } from "@chakra-ui/react";
import { useTheme } from "../../contexts/DefineTheme";

export function Logo() {
  const { themeDefined } = useTheme();
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight='bold'
      letterSpacing={'tight'}
      w='64'
      color={themeDefined.color}
    >
      dash
      <Text as='span' color={themeDefined.colorActive} mx='1'>.</Text>
      go
    </Text>
  )
}