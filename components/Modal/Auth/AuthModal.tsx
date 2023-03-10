import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import { AuthModalState } from '../../../atoms/authModalAtom'
import { auth } from '../../../firebase/clientApp'
import AuthInputs from './AuthInputs'
import OAuthButton from './OAuthButton'
import ResetPassword from './ResetPassword'

const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(AuthModalState)
    const [user, loading, error] = useAuthState(auth)
    const handleClose = () => {
        setModalState((prev) => ({
            ...prev,
            open: false
        }))
    }


    useEffect(() => {
        //if user is logged in then close the modal
        if (user) {
            handleClose()
        }

    }, [user])


    return (
        <>


            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        {modalState.view === 'login' && "Login"}

                        {modalState.view === 'signup' && "Sign Up"}
                        {modalState.view === 'resetPassword' && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex" flexDirection='column' alignItems='center' justifyContent='center' pb={6}>
                        <Flex direction='column' justify='center' width='70%' >

                            {modalState.view === 'login' || modalState.view === 'signup' ?

                                (
                                <>
                                <OAuthButton />
                            <Text color="gray.400" fontWeight={700} textAlign='center'>OR</Text>
                                        <AuthInputs />
                                        </>
                                        ) : (
                                    <ResetPassword />
                                )
                            }


                            {/**ResetPassword */}

                        </Flex>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthModal