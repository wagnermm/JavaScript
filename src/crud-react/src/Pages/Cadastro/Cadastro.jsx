import { useState } from 'react';
import Modal  from '../../Components/Modal/Modal';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './custom.css';


const Container = ()=> {
    const {theme} = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div className='container'>
            <p>O tema atual é: {theme}</p>
            <div className="btnContent">
                <button type='button' className='btnCadastrar' onClick={()=>setModalOpen(true)}>Cadastrar</button>
                <Modal isOpen={modalOpen} onClose={()=> setModalOpen(!modalOpen)}/>
            </div>
            
        </div>
    )
};

export default Container