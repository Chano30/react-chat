import { Container } from '@chakra-ui/react'
import React from 'react'

export const SectionContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <Container maxW={1366} mx={'auto'} color={"primary.500"}>
      {children}
    </Container>
  )
}
