import { Stack, HStack, Box } from '@chakra-ui/react'
import { useTheme } from '../../contexts/DefineTheme'
import { PaginationItem } from './PaginationItem'

export function Pagination() {

  const { theme } = useTheme()

  return (
    <Stack
      direction={['column', 'row']} spacing={6} mt='8'
      justify='space-between' align='center'
    >
      <Box color={theme.color.contrastLight}>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>
        <PaginationItem number={1} />
        <PaginationItem isCurrent number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  )

}