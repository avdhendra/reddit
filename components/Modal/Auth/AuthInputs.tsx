import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { AuthModalState } from '../../../atoms/authModalAtom'
import Login from './Login'
import SignUp from './SignUp'
type AuthInputsProps = {

}


const AuthInputs: React.FC<AuthInputsProps> = () => {
    const ModalState = useRecoilValue(AuthModalState)
    return (
        <Flex direction="column" align='center' width="100%" mt={4}>
            {ModalState.view === 'login' && <Login />}
            {ModalState.view === 'signup' && <SignUp />}

        </Flex>
    )
}

export default AuthInputs
