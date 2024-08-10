import { Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const GuestLayout = () => {
  return (
      <Container
        maxW={'100vw'}
        backgroundColor={'#342D3C'}
        height={'100vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'primary.500'}
      >
        <Outlet />
      </Container>
  )
}
