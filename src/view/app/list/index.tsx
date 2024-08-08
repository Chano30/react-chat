import { Box } from '@chakra-ui/react'
import React from 'react'
import { UserInfo } from './userInfo'
import { ChatList } from './chatList'

export const List = () => {
  return (
    <Box 
      flex={1}
      display={'flex'}
      flexDirection={'column'}
    >
      <UserInfo />
      <ChatList />
    </Box>
  )
}
