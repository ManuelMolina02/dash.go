import { Text } from "@chakra-ui/react";
import { useTheme } from "../../contexts/DefineTheme";

export function Logo() {
  const { theme } = useTheme();
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight='bold'
      letterSpacing={'tight'}
      w='64'
      color={theme.bg.contrastLight}
    >
      dash
      <Text as='span' color={theme.color.primary} mx='1'>.</Text>
      go
    </Text>
  )
}