import { useState } from 'react';
import Modal  from '../../Components/Modal/Modal';
import './custom.css';


const Container = ()=> {
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div className='container'>
            <div className="btnContent">
                <button type='button' className='btnCadastrar' onClick={()=>setModalOpen(true)}>Cadastrar</button>
                <Modal isOpen={modalOpen} onClose={()=> setModalOpen(!modalOpen)}/>
            </div>
            
        </div>
    )
};

export default Container