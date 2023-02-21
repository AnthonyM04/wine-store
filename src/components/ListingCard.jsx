export default function ListingCard( {wine, image, description, location, winery, rating, price} ) {



console.log( {wine} )

    return(
        <div className="card">
            <h3>{wine.title}</h3>
            <img src={wine.image} alt={wine.title}/>
            <p>{wine.description}</p>
            <p>{wine.location}</p>
            <p>{wine.winery}</p><br/>
            <p>$20</p><br/>
            <details>
                <summary>Rating</summary>
                <p>{wine.rating.average}</p>
                <p>{wine.rating.reviews}</p>
                
            </details>
        </div>
    )
}