import { Button } from "@chakra-ui/react";
import { useTheme } from "../../contexts/DefineTheme";

interface PaginationItemProps {
  number: number
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {

  const { theme } = useTheme();

  if (isCurrent) {
    return (
      <Button
        size={'sm'}
        fontSize='xs'
        w='4'
        disabled
        _disabled={{
          bg: theme.color.tertiary,
          color: theme.bg.contrastDark,
        }}

        _hover={{
          filter: 'brightness(1.2)',
        }}
      >
        {number}
      </Button>
    )
  }


  return (

    <Button
      size={'sm'}
      fontSize='xs'
      w='4'
      bg={theme.bg.primary}
      color={theme.bg.contrastLight}
      _hover={{
        filter: theme.bg.name !== 'light' ? 'brightness(1.4)' : 'brightness(.9)',

      }}

      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )

}