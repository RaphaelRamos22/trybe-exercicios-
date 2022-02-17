import React, {Component} from "react";

const task = (value) => {
    return(   
       <li> {value} </li>
    )
   }
  
   const array = ['JSX', 'ReactDOM.render']

class Task extends Component{
    render(){
        return (
            <ul>{ array.map(element => task(element))}</ul>
        ) 
    }
}

export default Task