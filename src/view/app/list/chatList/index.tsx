import { Box, Img, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

export const ChatList = () => {
  

  return (
    <Box 
      height={window.innerHeight + 'px'}
      overflow={'scroll'}
      backgroundColor={'red'}

    >
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FaSearch color='gray.300'/>
        </InputLeftElement>
        <Input 
          placeholder='Search'
          borderRadius={'15px'}
        />
      </InputGroup>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
        padding={'20px'}
        borderBottom={'1px solid'}
      >
        <Img 
          src='https://i.pravatar.cc/50?img=2'
        />
        <Box>
          <Text>Jane Doe</Text>
          <Text>Hello !</Text>
        </Box>
      </Box>
    </Box>
  )
}
