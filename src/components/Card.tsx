import "./Card.css"

export default function Card(){
    return(
        <div className="Card">
          <h3>Name</h3>
            <img src="#" alt="Ein Bild"/>
            <ul>
                <li>status</li>
                <li>origin</li>
                <li>species</li>
                <li>type</li>
            </ul>
        </div>
    )
}