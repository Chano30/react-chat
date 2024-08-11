import { Box, Button, Icon, Img, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { FiFile } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const Register = () => {
  const [show, setShow] = useState<boolean>(false)
  const avatarRef = useRef<HTMLInputElement | null>(null)
  const [avatar, setAvatar] = useState<{ file: File | null, url: string }>({
    file: null,
    url: ''
  })
  const handleClick = () => setShow(!show)
  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining to safely access files
    if (file) {
      setAvatar({
        file,
        url: URL.createObjectURL(file)
      });
    }
  }

  return (
    <Box
      backgroundColor={'#312938'}
      maxW={'500px'}
      height={'auto'}
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
        >Create an Account</Text>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'5px'}
        >
          <Img
            src={avatar.url || 'https://i.pravatar.cc/100?img=3'}
            width={'60px'}
            height={'60px'}
            borderRadius={'50%'}
            objectFit={'cover'}
          />
          <Input
            type='file'
            display={'none'}
            onChange={handleAvatar}
            ref={avatarRef}
          />
          <Text
            cursor={'pointer'}
            children={<Icon as={FiFile} />}
            onClick={() => avatarRef.current?.click()}
          />
        </Box>
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
              type='email'
              paddingBlock={'30px'}
              borderColor={'transparent'}
              backgroundColor={'#342D3C'}
              placeholder='Enter email address'
            />
          </Box>
          <Box
            width={'100%'}
          >
            <Text>Username</Text>
            <Input
              type='username'
              autoComplete='disabled  '
              paddingBlock={'30px'}
              borderColor={'transparent'}
              backgroundColor={'#342D3C'}
              placeholder='Enter Username'
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
                  {show ? <FaRegEye size={24} /> : <FaRegEyeSlash size={24} />}
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
        Do you have an account ?
        <Link
          to={'/login'}
        >
          <Text
            color='#8E80F5'
          >
            Log in
          </Text>
        </Link>
      </Text>
    </Box>
  )
}
