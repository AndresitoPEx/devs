import "./equipo.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    //Objeto
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.3),
    }   


    //Retorno de componente Equipo
    return <>
        {colaboradores.length > 0 &&
            < section className="equipo" style={obj} >

                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value, id)
                    }}

                /> 

                <h2 style={{ borderColor: colorPrimario }}>{titulo}</h2>
                <div className="colegas">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index} c
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }

                </div>
            </section >
        }
    </>

}

export default Equipo