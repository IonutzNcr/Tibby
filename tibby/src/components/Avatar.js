import react from "react";
import '../App.css';


export function Avatar(props) {
    return (
        <div className = "containerAvatar" onClick = {()=> props.event()} >
            {props.url && 
             <img src={props.url} alt={props.alt} className = "image" />
            }
        </div>
    )
}