import React, {Component} from "react";

class Pokedex extends Component{
    render(){
        const {poke} = this.props
        return(
            <div>
                <h4>{poke.name}</h4>
                <p>{poke.type}</p>
                <p>averageWeight: {`${poke.averageWeight.value} ${poke.averageWeight.measurementUnit}`}</p>
                <img src={poke.image} alt={poke.name} />
            </div>
        )
    }
}

export default Pokedex