import React, { useState }from "react";
import Modal from 'react-modal';


export default function Agregar () {
    const [ modal, setModal ]= useState(false);

    const abrirCerarModal = () => {
        setModal(!modal);
      }

      return (
        <section>
                 <h2>MODAL AGREGAR PERSONAJE</h2>
                <button className="btn-agregar" onClick={() => { abrirCerarModal() }} >AGREGAR PERSONAJE</button>
                 <Modal isOpen={modal}  className="modal-styles">
                     <div className="form-styles">
                            <button onClick={() => { abrirCerarModal() }} className="btn-cerrar-modal"> X</button>
                         <form action=""  className="form-styles">
                            <label>Nombre</label>
                            <input className="input-modal" type="text" />
                            <label>Cumpleaños</label>
                            <input className="input-modal" type="text" />
                            <label>Genero</label>
                            <input  className="input-modal" type="text" />
                            <label>Color de ojos</label>
                            <input  className="input-modal" type="text" />
                            <label>Color de cabello</label>
                            <input  className="input-modal" type="text" />
                            <label>Casa</label>
                            <input  className="input-modal" type="text" />
                        </form>
                     </div>
                     <div>
                     <button className="btn-agregar-favorito">Agregar a Favoritos</button>
                     </div>
               </Modal>
           </section>
      );

}

// const Agregar = () => (
    

//     <section>
//         <h2>MODAL AGREGAR PERSONAJE</h2>
//         <button className="btn-agregar" onClick={() => { abrirCerarModal() }} >AGREGAR PERSONAJE</button>
//         <Modal onClick={modal} >
//             <h2></h2>
//             <button></button>
//             <div>
//                 <form action="">
//                     <input type="text" />
//                     <button></button>
//                 </form>
//             </div>
//         </Modal>
//     </section>
  
// )





// export default Agregar