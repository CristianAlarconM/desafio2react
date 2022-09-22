import { useState } from 'react';

const Input = ({ estado, setPassword }) => {
    return (
        <div className="form">
            <label className="text-center mt-4" >Nombre</label>
            <input type="text" className="form-control border border-success mt-2 mb-2" placeholder="Ingrese su nombre"></input>
            <label className="text-center mt-4">Contraseña</label>
            <input type="text" className="form-control border border-success mt-2 mb-2" onChange={(e) => setPassword(e.target.value)} value={estado}></input>



        </div >)
}
export default Input 