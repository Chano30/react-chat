import { Box, Button, Input, Text } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export const Login = () => {
  return (
    <Box
      backgroundColor={'#312938'}
      width={'30vw'}
      height={'60vh'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      padding={'20px 10px'}
      gap={'20px'}
    >
      <Text
        fontSize={'18px'}
        fontWeight={500}
      >Log in with</Text>
      <Box
        display={'flex'}
        gap={'10px'}
      >
        <Button
          backgroundColor={'#342D3C'}
          color={'primary.500'}
          display={'flex'}
          alignItems={'center'}
          gap={'10px'}
          paddingInline={'40px'}
        ><FcGoogle size={20} /> Google</Button>
        <Button
          backgroundColor={'#342D3C'}
          color={'primary.500'}
          display={'flex'}
          alignItems={'center'}
          gap={'10px'}
          paddingInline={'40px'}
        ><FaFacebookF size={20} color='#279DED' /> Facebook</Button>
      </Box>
      <Text>Or</Text>
      <Box
      >
        <Box>
          <Text>Email</Text>
          <Input
            placeholder='Enter email address'
          />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input
            placeholder='Enter your password'
          />
        </Box>
      </Box>
      <Button>
        Log in
      </Button>
    </Box>
  )
}
