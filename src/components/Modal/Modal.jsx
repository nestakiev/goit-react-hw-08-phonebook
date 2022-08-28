import { Overlay, ModalContainer } from "./Modal.styled";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { EditContactForm } from "components/EditContactForm/EditContactForm";
import { useDispatch, useSelector } from "react-redux";
import { setIdforEditModal, getIdforEditModal } from "redux/modalSlice";
const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
    const dispatch = useDispatch();
    const id = useSelector(getIdforEditModal);
   useEffect(() => {
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            dispatch(setIdforEditModal(''));
        }
    }
    if (id) {
        window.addEventListener('keydown', handleKeyDown);
    } 
    
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
   }, [id, dispatch]);
   
    

    const handleBackdropClick = e => {
        if(e.currentTarget === e.target) {
            dispatch(setIdforEditModal(''));
        }
    }

    return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalContainer>
                    <EditContactForm/>
                </ModalContainer>
            </Overlay>,
            modalRoot,
        )
    ;
}