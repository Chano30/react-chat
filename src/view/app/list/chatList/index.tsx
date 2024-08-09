import { Box, Img, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export const ChatList = () => {


  return (
    <Box
    display={'flex'}
    flexDirection={'column'}
    >
      <InputGroup
        paddingInline={'10px'}
      >
        <InputLeftElement pointerEvents='none'
          paddingLeft={'10px'}
        >
          <FaSearch color='#a5a5a5' />
        </InputLeftElement>
        <Input
          color={'gray.100'}
          placeholder='Search'
          _placeholder={{color: 'inherit'}}
          borderRadius={'15px'}
          borderColor={'gray.100'}
        />
      </InputGroup>
      <Box
        height="calc(100vh - 180px)"
        display={'flex'}
        flexDirection={'column'}
        overflowY={'scroll'}
        sx={
          {
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }
        }
      >
        {[...Array(20)].map((_, index) => (
          <Box
            key={index}
            display={'flex'}
            alignItems={'center'}
            gap={'20px'}
            padding={'20px'}
            _hover={{ bg: 'gray.200' }}
            borderRadius={'20px'}
          >
            <Img
              src='https://i.pravatar.cc/50?img=2'
              alt="Avatar"
              borderRadius={'50%'}
              objectFit={'cover'}
            />
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'20px'}
            >
              <Text
                fontWeight={500}
              >Jane Doe</Text>
              <Text
                fontSize={'14px'}
                fontWeight={300}
              >Hello !</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
