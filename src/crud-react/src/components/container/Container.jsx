import { useState } from 'react';
import Modal  from '../modal/Modal';
import './custom.css';


const Container = ()=> {
    const [clientRow1, setClientRow1] = useState('cadastro1');
    const [clientRow2, setClientRow2] = useState('cadastro2');
    const [clientRow3, setClientRow3] = useState('cadastro3');
    const [modalOpen, setModalOpen] = useState(false);
    const excludeClient1 = ()=> {
        clientRow1 === 'cadastro1' ? setClientRow1('cadastro1Excluido') : setClientRow1('cadastro1');
    };
    const excludeClient2 = ()=> {
        clientRow2 === 'cadastro2' ? setClientRow2('cadastro2Excluido') : setClientRow2('cadastro2');
    };
    const excludeClient3 = ()=> {
        clientRow3 === 'cadastro3' ? setClientRow3('cadastro3Excluido') : setClientRow3('cadastro3');
    };
    return(
        <div className='container'>
            <div className="btnContent">
                <button type='button' className='btnCadastrar' onClick={()=>setModalOpen(true)}>Cadastrar</button>
                <Modal isOpen={modalOpen} onClose={()=> setModalOpen(!modalOpen)}/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className={clientRow1}>
                        <td>Wagner Miranda</td>
                        <td>wagner.miranda@gmail.com</td>
                        <td>
                            <div className="actions">
                                <button type='button' className='btnEditar'>Editar</button>
                                <button onClick={excludeClient1} type='button' className='btnExcluir'>Excluir</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tr className={clientRow2}>
                    <td>João Silva</td>
                    <td>joao.silva@gmail.com</td>
                    <td>
                        <div className="actions">
                            <button type='button' className='btnEditar'>Editar</button>
                            <button onClick={excludeClient2} type='button' className='btnExcluir'>Excluir</button>
                        </div>
                    </td>
                </tr>
                <tr className={clientRow3}>
                    <td>Maria Tereza</td>
                    <td>maria.tereza@gmail.com</td>
                    <td>
                        <div className="actions">
                            <button type='button' className='btnEditar'>Editar</button>
                            <button onClick={excludeClient3} type='button' className='btnExcluir'>Excluir</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default Container