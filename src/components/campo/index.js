

import "./campo.css"

const Campo = (props) => {
    
    //Destruccion de props
    const {type = "text"} = props


    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value)

    }

    return (
        <div className= {`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor} 
                onChange={manejarCambio}
                type={type} 
                />
        </div>
    )
}
export default Campo