//import { useState } from 'react';
import './customModal.css';

const Modal = ({isOpen, onClose})=> {

    if(isOpen) {
        return(
            <div className='modalContainer'>
                <div className="moalContent">
                    <form className="form">
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                        <label htmlFor="email">E-mail</label>
                        <input type="text" className='email' />
                        <div className="btnActionsForm">
                            <button type='button' className='btnSalvar'>Salvar</button>
                            <button type='button' className='btnCancelar' onClick={onClose}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return null
    
};

export default Modal