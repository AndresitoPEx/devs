import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from "./components/header/header";
import Formulario from "./components/formulario/formulario";
import AddSection from './components/addSection/addSection';
import Equipo from './components/equipo/equipo';
import Footer from './components/footer/footer';

function App() {
  //Aqui creamos el estado
  const [mostrarFormulario, actualizarEstado] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "FrontEnd",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX/UI",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/AndresitoPEx.png",
      nombre: "Andres Romo",
      puesto: "Dev FullStack",
      fav: true
    }
    ])

  //Aqui creamos los equipos
  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: "UX/UI",
        colorPrimario: "#db6ebf",
        colorSecundario: "#fae9f5"
      },
      {
        id: uuid(),
        titulo: "Programacion",
        colorPrimario: "#82cffa",
        colorSecundario: "#e8f8ff"
      },
      {
        id: uuid(),
        titulo: "FrontEnd",
        colorPrimario: "#ff8a29",
        colorSecundario: "#ffeedf"
      },
      {
        id: uuid(),
        titulo: "BackEnd",
        colorPrimario: "#e06b69",
        colorSecundario: "#fde7e8"
      },
      {
        id: uuid(),
        titulo: "FullStack",
        colorPrimario: "#502f8f",
        colorSecundario: "#504e5e"
      },
      {
        id: uuid(),
        titulo: "Movil",
        colorPrimario: "#ffba05",
        colorSecundario: "#fff5d9"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9"
      },
      {
        id: uuid(),
        titulo: "DevOps",
        colorPrimario: "#a6d157",
        colorSecundario: "#f0f8e2"
      }
    ]
  )



  const cambiarEstado = () => {
    actualizarEstado(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Colaborador: ", colaborador);
    //Usamos spreed operator para crear una copia del array
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipos
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Creamos equipos
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />
      }

      <AddSection cambiarEstado={cambiarEstado} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
