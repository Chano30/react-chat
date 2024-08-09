import { SectionContainer } from '@/components/SectionContainer'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { List } from './list'
import { Chats } from './chat'
import { Details } from './detail'

export const Home = () => {
  return (
    <SectionContainer>
      <Box
        display={'flex'}
        flexDirection={'row'}
        paddingBlock={'20px'}
        overflow={'hidden'}
        height={'100vh'}
      >
        <List />
        <Chats />
        <Details />
      </Box>
    </SectionContainer>
  )
}
