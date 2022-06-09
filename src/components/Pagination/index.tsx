import { Stack, HStack, Box, Text } from '@chakra-ui/react'
import { useTheme } from '../../contexts/DefineTheme'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onChangePage: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [new Array(to - from)]
    .map((_, i) => from + i + 1)
    .filter(page => page > 0);
}

export function Pagination({
  currentPage = 1,
  onChangePage,
  registersPerPage = 10,
  totalCountOfRegisters

}: PaginationProps) {

  const { theme } = useTheme()

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
    : []

  return (
    <Stack
      direction={['column', 'row']} spacing={6} mt='8'
      justify='space-between' align='center'
    >
      <Box color={theme.color.contrastLight}>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>


        {
          currentPage > (1 + siblingCount) && (
            <>
              <PaginationItem number={1} onPageChange={onChangePage} />
              {
                currentPage > (2 + siblingCount) && (
                  <Text color={'gray.300'} w='4' textAlign={'center'}>...</Text>
                )
              }
            </>

          )
        }


        {
          previousPages.length > 0 && previousPages.map(page => {
            return (
              <PaginationItem key={page} number={page} onPageChange={onChangePage} />
            )
          })
        }

        <PaginationItem number={currentPage} isCurrent onPageChange={onChangePage} />

        {
          nextPages.length > 0 && nextPages.map(page => {
            return (
              <PaginationItem key={page} number={page} onPageChange={onChangePage} />
            )
          })
        }

        {
          (currentPage + siblingCount) < lastPage && (
            <>
              {
                (currentPage + 1 + siblingCount) < lastPage && (
                  <Text color={'gray.300'} w='4' textAlign={'center'}>...</Text>
                )
              }
              <PaginationItem number={lastPage} onPageChange={onChangePage} />
            </>
          )
        }

      </HStack>
    </Stack>
  )

}