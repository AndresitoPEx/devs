import "./colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    //Destructuracion de props para obtener los datos del colaborador
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props

    return (
        <div className="colaborador">
            <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
            <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h3>{nombre}</h3>
                <h4>{puesto}</h4>
                {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}


            </div>
        </div>
    );
}

export default Colaborador;