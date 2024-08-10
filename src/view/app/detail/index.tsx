import { Box, Button, Img, Text } from '@chakra-ui/react'
import { FaAngleRight,FaDownload  } from "react-icons/fa6";

export const Details = () => {
  return (
    <Box
      flex={1}
      backgroundColor={'background.100'}
      borderRadius={'20px'}
      overflowY={'scroll'}
      padding={'20px'}
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
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'20px'}
      >
        <Box 
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text>Chat Settings</Text>
          <FaAngleRight cursor={'pointer'}/>
        </Box>
        <Box 
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text>Privacy & Help</Text>
          <FaAngleRight cursor={'pointer'}/>
        </Box>
        <Box 
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Text>Shared photos</Text>
          <FaAngleRight cursor={'pointer'}/>
        </Box>
        <Box>
          {[...Array(4)].map((_, index) => (
            <Box 
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginBottom={'10px'}
            >
              <Box
              display={'flex'}
              alignItems={'center'}
              gap={'10px'}
              >
                <Img
                  src={`https://i.pravatar.cc/40?img=${index}`}
                />
                <Text
                  fontSize={'14px'}
                  color={'lightgray'}
                  fontWeight={300}
                >photo_2024.{index}.png</Text>
              </Box>
                <FaDownload />
            </Box>
          ))}
        </Box>
        <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        >
          <Text>Shared files</Text>
          <FaAngleRight />
        </Box>
        <Button

        >
          Block User
        </Button>
        <Button

        >
          Log out
        </Button>
      </Box>
    </Box>
  )
}
