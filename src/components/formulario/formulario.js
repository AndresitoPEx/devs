import { useState } from "react"

import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones/listaOpciones"
import Boton from "../boton/boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault()
        console.log("Titulo: ", titulo);
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario si eres desarrollador</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar Link de Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Agregar Dev" />
        </form>
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear equipo</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo
                titulo="Color"
                placeholder="Ingresar color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo" ></Boton>
        </form>
    </section>
}

export default Formulario