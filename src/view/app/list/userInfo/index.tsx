import { Box, Img, Text } from "@chakra-ui/react";
import { LuMoreHorizontal } from "react-icons/lu";
import { FaVideo, FaRegEdit } from "react-icons/fa";

export const UserInfo = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      padding={'20px'}
      justifyContent={'space-between'}
    >
      <Box 
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
      >
        <Img 
          src="https://i.pravatar.cc/50?img=3" 
          borderRadius={30}
          objectFit={'cover'}
        />
        <Text>John Doe</Text>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={'20px'}
      >
        <LuMoreHorizontal />
        <FaVideo />
        <FaRegEdit />
      </Box>
    </Box>
  )
}
