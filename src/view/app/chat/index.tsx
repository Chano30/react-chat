import {
  Box,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react'
import { FaVideo, FaPhone, FaInfo, FaImage, FaMicrophone, FaCamera, FaFaceSmile, FaThumbsUp } from "react-icons/fa6";

export const Chats = () => {
  return (
    <Box
      flex={2}
      backgroundColor={'background.100'}
      borderRadius={'20px'}
      marginInline={'20px'}
      paddingBlock={'10px'}
    >
      {/* Top Container */}
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderBottomColor={'background.200'}
        paddingBottom={'10px'}
        borderBottomWidth={'1px'}
        paddingInline={'10px'}
      >
        <Box
          display={'flex'}
          gap={'20px'}
          alignItems={'center'}
        >
          <Img
            src='https://i.pravatar.cc/60?img=2'
            borderRadius={'50%'}
            objectFit={'cover'}
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'5px'}
          >
            <Text
              fontSize={'18px'}
              fontWeight={'bold'}
            >John Doe</Text>
            <Text
              fontSize={'14px'}
              fontWeight={300}
              color={'gray.100'}
            >Active now</Text>
          </Box>
        </Box>

        <Box
          display={'flex'}
          gap={'20px'}
          alignItems={'center'}
        >
          <FaPhone color='#279DED' size={20} />
          <FaVideo color='#279DED' size={20} />
          <FaInfo color='#279DED' size={20} />
        </Box>
      </Box>
      {/* End of Top container */}
      {/* Mddle Container */}
      <Box></Box>
      {/* End of Middle Container */}
      {/* Bottom Container */}
      <Box>
        <Box>
          <FaImage />
          <FaCamera />
          <FaMicrophone />
        </Box>
        <InputGroup>
          <Input
            placeholder='Aa'
          />
          <InputRightElement>
            <FaFaceSmile />
          </InputRightElement>
        </InputGroup>
        <Box>
          <FaThumbsUp />
        </Box>
      </Box>
      {/* End of Bottom Container */}
    </Box>
  )
}
