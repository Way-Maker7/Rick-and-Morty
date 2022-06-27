import Card from "./Card";
import "./Gallery.css"
import {useEffect, useState} from "react";
import {getCharacters} from "../services/apiService";

export default function Gallery(props){
    const [chars, setChars] = useState()

    useEffect( () => {
        setupChars().catch(e => console.log(e.message))
        },[]

    )


    const setupChars = () => getCharacters().then(data => setChars(data.results))

//console.log(chars);
    if (!chars){
        return <div className="Gallery">
            <h1>loading...</h1>
        </div>
    }

    return(
        <div className="Gallery">
            { chars.map( char => (
                <Card
                key = {char.id}
                name={char.name}
                pic = {char.image}
                origin = {char.location.name}
                status = {char.status}
                species = {char.species}
                />))}
        </div>
    )
}