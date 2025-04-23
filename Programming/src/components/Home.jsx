import ApiFetch from "./ApiFetch"
import { useEffect, useState } from "react";
//"https://newsapi.org/v2/everything?q=apple&from=2025-04-21&to=2025-04-21&sortBy=popularity&apiKey=22f63d877828444b9ba61543b8e2b3fe",
function Home(){

    let [response, updateResponse] = useState(null);
    let [error, updateError] = useState(null);
    let [loading, updateLoading] = useState(true)
    useEffect(()=>{
        ApiFetch("https://newsapi.org/v2/everything?q=fitness&from=2025-04-22&to=2025-04-22&sortBy=popularity", 
            {
          headers: {
            'Authorization': `Bearer 22f63d877828444b9ba61543b8e2b3fe`, 
          }
        })
        .then(data => {
            updateLoading(false);
            updateResponse(data);
        })
        .catch(err => {
            updateLoading(false);
            updateError(err.message);
            
        })
    },[])
    

    return <>
    <p>
        {loading? (<div>Loading...</div>) 
        : (response 
        ? (
            <div>{JSON.stringify(response, null, 2)}</div>)
            : <div>Error: {error}</div>)
        }
    </p>
    </>

}

export default Home;