import {
  Box,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react'
import { FaVideo, FaPhone, FaInfo, FaImage, FaMicrophone, FaCamera, FaFaceSmile, FaThumbsUp } from "react-icons/fa6";
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';

export const Chats = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const endMessage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endMessage.current?.scrollIntoView()
  }, [])

  const handleEmoji = (e: any) => {
    setText(prev => prev + e.emoji)
    setOpen(false)
  }


  return (
    <Box
      flex={2}
      backgroundColor={'background.100'}
      borderRadius={'20px'}
      marginInline={'20px'}
      paddingBlock={'10px'}
      display={'flex'}
      flexDirection={'column'}
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
      <Box
        flex={1}
        padding={'20px'}
        overflowY={'scroll'}
        display={'flex'}
        flexDirection={'column'}
        gap={'20px'}
      >
        {/* Message */}
        {
          [...Array(10)].map((_, index) => (
            <>
              <MessageFrom />
              <MessageFor />
              <Box ref={endMessage}></Box>
            </>
          ))
        }
      </Box>
      
      {/* End of Middle Container */}
      {/* Bottom Container */}
      <Box
        display={'flex'}
        padding={'20px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'20px'}
      >
        <Box
          display={'flex'}
          gap={'20px'}
        >
          <FaImage size={'20px'} cursor={'pointer'} color='#279DED' />
          <FaCamera size={'20px'} cursor={'pointer'} color='#279DED' />
          <FaMicrophone size={'20px'} cursor={'pointer'} color='#279DED' />
        </Box>
        <Box
          position={'relative'}
          flex={1}
        >
          <InputGroup>
            <Input
              placeholder='Aa'
              borderRadius={'30px'}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <InputRightElement>
              <FaFaceSmile
                size={'20px'}
                cursor={'pointer'}
                color='#279DED'
                onClick={() => setOpen(prev => !prev)}
              />
            </InputRightElement>
          </InputGroup>
          <Box
            position={'absolute'}
            right={0}
            bottom={'50px'}
          >
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </Box>
        </Box>
        <Box>
          <FaThumbsUp size={'20px'} cursor={'pointer'} color='#279DED' />
        </Box>
      </Box>
      {/* End of Bottom Container */}
    </Box>
  )
}



const MessageFrom = () => {
  return (
    <Box
      display={'flex'}
      gap={'10px'}
      maxW={'70%'}
    >
      <Img
        src='https://i.pravatar.cc/30?img=2'
        borderRadius={'50%'}
        height={'30px'}
        objectFit={'cover'}
      />
      <Box
        flex={1}
        display={'flex'}
        flexDirection={'column'}
        gap={'5px'}
      >
        <Text
          padding={'20px'}
          backgroundColor={'gray.300'}
          borderRadius={'30px'}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe hic architecto deleniti sequi? Quae molestias cumque inventore error velit et. Optio neque minima consequatur hic repellendus perspiciatis saepe vitae nam.
        </Text>
        <Text
          fontSize={'13px'}
        >
          1 min ago
        </Text>
      </Box>
    </Box>
  )
}
const MessageFor = () => {
  return (
    <Box
      display={'flex'}
      gap={'10px'}
      maxW={'70%'}
      alignSelf={'flex-end'}
    >
      <Box
        flex={1}
        display={'flex'}
        flexDirection={'column'}
        gap={'5px'}
      >
        <Img
          src='https://picsum.photos/id/237/200/300'
          width={'100%'}
          height={'300px'}
          borderRadius={'10px'}
          objectFit={'cover'}
        />
        <Text
          backgroundColor={'blue.200'}
          padding={'20px'}
          borderRadius={'30px'}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe hic architecto deleniti sequi? Quae molestias cumque inventore error velit et. Optio neque minima consequatur hic repellendus perspiciatis saepe vitae nam.
        </Text>
        <Text
          fontSize={'13px'}
        >
          1 min ago
        </Text>
      </Box>
    </Box>
  )
}
