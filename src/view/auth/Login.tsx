import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa6";

export const Login = () => {
  const [show, setShow] = useState<Boolean>(false)
  const handleClick = () => setShow(!show)
  
  return (
    <Box
      backgroundColor={'#312938'}
      maxW={'500px'}
      padding={'20px 10px'}
      flex={1}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'20px'}
        flex={1}
      >
        <Text
          fontSize={'18px'}
          fontWeight={500}
        >Welcome back!</Text>
        <Box
          width={'80%'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          gap={'10px'}
        >
          <Box
            width={'100%'}
          >
            <Text>Email</Text>
            <Input
              paddingBlock={'30px'}
              borderColor={'transparent'}
              backgroundColor={'#342D3C'}
              placeholder='Enter email address'
            />
          </Box>
          <Box
            width={'100%'}
          >
            <Text>Password</Text>
            <InputGroup
            >
              <Input
                type={show ? 'text' : 'password'}
                paddingBlock={'30px'}
                borderColor={'transparent'}
                backgroundColor={'#342D3C'}
                placeholder='Enter your password'
              />
              <InputRightElement 
                height={'100%'}
              >
                <Button 
                  size='sm' 
                  onClick={handleClick}
                  colorScheme='transparent'
                >
                  {show ? <FaRegEye size={24}/> : <FaRegEyeSlash size={24}/>}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        <Box
          width={'80%'}
        >
          <Button
            width={'100%'}
            borderRadius={'4px'}
            paddingBlock={'30px'}
            backgroundColor={'#8E80F5'}
            _hover={{
              opacity: '0.5'
            }}
          >
            Log in
          </Button>
        </Box>
      </Box>
      <Text
        display={'flex'}
        gap={'5px'}
        marginTop={'20px'}
        justifyContent={'center'}
        width={'100%'}
      >
        Don't have an account ?
        <Link
          to={'/register'}
        >
          <Text
            color='#8E80F5'
          >
            Sign up
          </Text>
        </Link>
      </Text>
    </Box>
  )
}
