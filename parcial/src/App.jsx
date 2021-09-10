import React from "react";
import Historia from "./components/Historia";
import Opciones from "./components/Opciones";
import data from"./data.json";
import Recordatorio from "./components/Recordatorio";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      contador:1,
      desicion:"",
      acumulado:[]
    }
    this.actualizar=this.actualizar.bind(this);
  }
  actualizar(opcion){
    let nuevoArreglo=this.state.acumulado
    if(nuevoArreglo.length==0) {nuevoArreglo=[opcion]}
    else{nuevoArreglo.push(opcion)}
  
    
    this.setState({
      contador: this.state.contador+1,
      desicion:opcion,
      acumulado:nuevoArreglo
    })
  }
  filtro(){
    const id =this.state.contador+this.state.desicion;
    const array=data.filter((element)=>element.id===id)
    return array[0];
  }
  render(){
    return (
      <div className="App">
        {this.state.contador<=5?
          <div className="layout">
              <Historia >{this.filtro().historia}</Historia>
              <Opciones funcionPersonalizada={this.actualizar} botonA="a" botonB="b" botonAtext={this.filtro().opciones.a} botonBtext={this.filtro().opciones.b}/>        
              <Recordatorio desicion={this.state.desicion} arrayDecisiones={this.state.acumulado}></Recordatorio>
          </div>
        :alert("Fin")}
      </div>
    );
  }
  
}

export default App;
