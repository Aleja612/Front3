import React from "react";

class Historia extends React.Component{
    render(){
        return(
            <React.Fragment>
            <h1 className="historia">{this.props.children}</h1>
            </React.Fragment>
        )
    }
}
export default Historia;