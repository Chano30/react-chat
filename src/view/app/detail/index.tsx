import { Box, Img, Text } from '@chakra-ui/react'
import { FaAngleRight } from "react-icons/fa6";

export const Details = () => {
  return (
    <Box 
      flex={1}
      backgroundColor={'background.100'}
      borderRadius={'20px'}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'20px'}
        padding={'30px 20px'}
      >
        <Img 
          src='https://i.pravatar.cc/100?img=2'
          borderRadius={'50%'}
          objectFit={'cover'}
        />
        <Text>Jane Doe</Text>
        <Text>Active now</Text>
      </Box>
      <Box>
        <Box>
          <Text>Chat Settings</Text>
          <FaAngleRight />
        </Box>
        <Box>
          <Text>Privacy & Help</Text>
          <FaAngleRight />
        </Box>
        <Box>
          <Text>Shared photos</Text>
          <FaAngleRight />
          <Box>
            
          </Box>
        </Box>
        <Box>
          <Text>Shared files</Text>
          <FaAngleRight />
        </Box>
      </Box>
    </Box>
  )
}
