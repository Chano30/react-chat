import { Container } from '@chakra-ui/react'
import React from 'react'

export const SectionContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <Container maxW={'100vw'} mx={'auto'} color={"primary.500"} backgroundColor={'background.200'}>
      {children}
    </Container>
  )
}
