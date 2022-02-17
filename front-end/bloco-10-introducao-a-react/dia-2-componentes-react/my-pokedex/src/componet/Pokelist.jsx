import React, {Component} from "react";
import pokemons from "../data";
import Pokedex from "./Pokedex";

class Pokelist extends Component{
    render(){
        return(
            pokemons.map(pokemon =>(
                <div>
                    <Pokedex poke = {pokemon}/>
                </div>
            ))
        )
    }
}

export default Pokelist