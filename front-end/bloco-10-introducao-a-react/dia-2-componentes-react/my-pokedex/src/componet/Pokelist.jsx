import React, {Component} from "react";
import pokemons from "../data";
import Pokedex from "./Pokedex";

class Pokelist extends Component{
    render(){
        return(
            pokemons.map(pokemon =>(
                <div key={pokemon.id} className="pokedex">
                    <Pokedex poke = {pokemon}/>
                </div>
            ))
        )
    }
}

export default Pokelist