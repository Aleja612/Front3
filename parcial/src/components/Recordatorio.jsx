import React from "react";

class Recordatorio extends React.Component{
    render(){
        return(
            <div className="recordatorio">
               <h3>Selección anterior: {this.props.desicion}</h3>
               <h4>Historial de opciones elegidas: </h4>
               <ul>
                   {this.props.arrayDecisiones.map((element,index)=><li key={index+element}>{element}</li>)}
               </ul>
            </div>
            )
    }
}
export default Recordatorio;