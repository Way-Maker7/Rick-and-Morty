import {ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, ReactNode} from "react"
import "./Card.css"

export default function Card(props: {
    [x: string]: ReactNode; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; image: string | undefined
}){
    return(
        <div className="Card">
          <h3>{props.name}</h3>
            <img src={props.pic} alt="Ein Bild"/>
            <ul>
                <li>{props.status}</li>
                <li>{props.origin}</li>
                <li>{props.species}</li>

            </ul>
        </div>
    )
}