import { Button } from "@chakra-ui/react";
import { useTheme } from "../../contexts/DefineTheme";

interface PaginationItemProps {
  number: number
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {

  const { themeDefined } = useTheme();

  if (isCurrent) {
    return (
      <Button
        size={'sm'}
        fontSize='xs'
        w='4'
        disabled
        _disabled={{
          bg: themeDefined.bgActive,
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
      bg={themeDefined.bg}
      _hover={{
        filter: 'brightness(1.2)',
      }}
    >
      {number}
    </Button>
  )

}