import ApiFetch from "./ApiFetch"
import { useEffect, useState } from "react";

function Home(){

    let [response, updateResponse] = useState(null);
    let [error, updateError] = useState(null);
    useEffect(()=>{
        ApiFetch("https://newsapi.org/v2/everything?q=apple&from=2025-04-21&to=2025-04-21&sortBy=popularity&apiKey=22f63d877828444b9ba61543b8e2b3fe")
        .then(data => {
            updateResponse(data)
        })
        .catch(err => {
            updateError(err.message);
        })
    },[])
    

    return <>
    <p>
        {response ? (
            <div>{JSON.stringify(response, null, 2)}</div>)
            : <div>Error: {error}</div>
        }
    </p>
    </>

}

export default Home;