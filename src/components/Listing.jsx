import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

export default function Listing() {
    const [wines, setWines] = useState();
    const [type, setType] = useState('whites');

    useEffect( () => {
         fetch(`https://api.sampleapis.com/wines/${type}`)
        .then( res => res.json())
        .then( setWines )
        .catch( err => console.error(err) )
    }, [type])
    
    console.log({wines})

    return(
        <>
        <div id="topheader">
            <header>
                <h1>BOCA WINERY</h1>
            </header>
            <nav>
                <div class="container text-center">
                    <div class="row">
                        <p class="wine-button-flexbox">
                            <div class="button-one">
                            <button class= "" onClick={() => setType('whites') }>White</button>
                            </div>
                            <div class="button-two">
                            <button onClick={() => setType('reds') }>Red</button>                  
                            </div>
                        </p>
                    </div>
                </div>
            </nav>
        </div>

            <div>
                {!wines
                ? (<h2>Welcome to the site, choose above.</h2>)
                : (<section>
                        { wines.map( (element) => {
                            return (<ListingCard key={element.id} wine={element}/>
                        )})}
                </section>)
                }

            </div>
        </>
    )
}