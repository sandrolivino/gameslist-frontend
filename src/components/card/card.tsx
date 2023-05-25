import "./card.css";

interface CardProps {
    title: string,
    year: number,
    imgUrl: string,
    shortDescription: string
}

export function Card({ title, year, imgUrl, shortDescription } : CardProps){
    return(
        <div className="card">
            <img src={imgUrl}/>
            <h2>{year} + " - " + {title}</h2>
            <p><b>Valor:</b>{shortDescription}</p>
        </div>
    )
}