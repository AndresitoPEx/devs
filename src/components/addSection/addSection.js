

import "./addSection.css"

const AddSection = (props) => {

  return (
    <section className="Add-Section">
      <h3 className="titulo-add">Developers</h3>
      <img src="/img/plus.png" alt="Boton agregar" onClick={props.cambiarEstado}></img>
    </section> 
    
  );
}

export default AddSection;