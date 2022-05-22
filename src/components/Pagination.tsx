import { Stack, Button, Box, Flex } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Stack
      direction={'row'}
      mt='8'
      justify='space-between'
      align='center'
      spacing={6}

    >

      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Flex
        gap={2}
      >
        <Button
          size={'sm'}
          fontSize='xs'
          w='4'
          colorScheme={'pink'}
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>

        <Button
          size={'sm'}
          fontSize='xs'
          w='4'
          bg={'gray.700'}
          _hover={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          2
        </Button>

        <Button
          size={'sm'}
          fontSize='xs'
          w='4'
          bg={'gray.700'}
          _hover={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          3
        </Button>

        <Button
          size={'sm'}
          fontSize='xs'
          w='4'
          bg={'gray.700'}
          _hover={{
            bg: 'gray.500',
            cursor: 'default',
          }}
        >
          4
        </Button>
      </Flex>
    </Stack>
  )

}