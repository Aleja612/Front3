import React from "react";

class Opciones extends React.Component{
    
    render(){
        return(
            <React.Fragment>
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={()=>this.props.funcionPersonalizada("a")}>{this.props.botonA.toUpperCase()} </button>
                    <h2>{this.props.botonAtext}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={()=>this.props.funcionPersonalizada("b")}>{this.props.botonB.toUpperCase()}</button>
                    <h2>{this.props.botonBtext}</h2>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Opciones;