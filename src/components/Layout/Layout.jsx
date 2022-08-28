import { Outlet } from "react-router-dom";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageHeader } from "components/PageHeader/PageHeader";
import { PageFooter } from "components/PageFooter/PageFooter";
import { Main } from "./Layout.styled";
import { useSelector } from "react-redux";
import { getIdforEditModal } from "redux/modalSlice";
import { Modal } from "components/Modal/Modal";
import { Suspense } from "react";

export const Layout = () => {
    const id = useSelector(getIdforEditModal);
    return (
    <>  
        <PageHeader/>
        <Main>
            <Suspense fallback='null'>
                {id ? <Modal/> : <Outlet/>}
            </Suspense>
        </Main>
        <PageFooter/>
        <ToastContainer 
            autoClose={1500}
            draggablePercent={40}
            transition={Zoom}/>
    </>
    );
    
    
};