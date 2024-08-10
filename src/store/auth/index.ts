import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";


interface authStateProps {
  user: any
}

const initialAuthState: authStateProps = {
  user: null
}


const useAuthStore = createWithEqualityFn(
  (set: Function) => ({
    ...initialAuthState,

  })
)


const useAuthFacade = () => {
  const {user} = useAuthStore(
    (state: authStateProps) => ({
      user: state.user
    }),
    shallow
  )

  return {
    user
  }
}

export default useAuthFacade