import { useState } from 'react';

const Input = ({ estado, setEstado }) => {
    return (
        <div className="form-group font-weight-bold d-flex flex-column">
            <label className="text-center mt-4" >Nombre</label>
            <input type="text" className="form-control border border-success mt-2 mb-2" placeholder="Ingrese su nombre"></input>
            <label className="text-center mt-4">Contraseña</label>
            <input type="text" className="form-control border border-success mt-2 mb-2" onChange={(e) => setEstado(e.target.value)} value={estado}></input>



        </div >)
}
export default Input 