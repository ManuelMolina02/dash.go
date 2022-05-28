import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
  color?: string;
}

export function Profile({ showProfileData = true, color }: ProfileProps) {
  return (
    <Flex align={'center'} >

      {showProfileData && (
        <Box mr={4} textAlign='right'>
          <Text color={color}>Manuel Molina</Text>
          <Text color={'gray.300'} fontSize={'sm'}>
            manuelanmolina@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size={'md'} name='Manuel Molina' src="https://github.com/ManuelMolina02.png" />
    </Flex>
  )
}