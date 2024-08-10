import useAuthFacade from '@/store/auth'
import { Navigate, Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  const {user} = useAuthFacade()

  if(!user){
    return <Navigate to={'/login'}/>
  }

  return (
    <>
      <Outlet />
    </>
  )
}
