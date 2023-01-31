import { Button } from '@chakra-ui/react'
import React from 'react'
import { AuthModalState } from '../../../atoms/authModalAtom'
import{useSetRecoilState} from 'recoil'
type AuthButtonsProps = {
    
}
const AuthButton: React.FC = () => {
  const setAuthModalsState= useSetRecoilState(AuthModalState)
  return (
      <>
      <Button variant="outline"
        height='35px'
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: "110px" }}
        mr={2}
      onClick={()=>setAuthModalsState({open:true,view:'login'})}
      >Log In</Button>
      
      <Button height="35px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: "110px" }}
        mr={2}
      onClick={()=>{setAuthModalsState({open:true,view:'signup'})}}
      >Sign Up</Button>
      </>
  )
}

export default AuthButton