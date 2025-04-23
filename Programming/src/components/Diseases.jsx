import { createContext, useEffect, useState } from "react";
import ApiFetch from "./ApiFetch";
function Diseases(){
    // state to hold the api
    let [diseases, updateDiseases] = useState([])

    // states to hold information before and after the api is loaded or failed
    let [error, updateError] = useState(null)
    let [loading, updateLoading] = useState(true)

    
    // makes sure the code inside the function is run one time 
    // and not infinitely 
    useEffect(()=>{
        ApiFetch("", "")
        .then(response => {
            if (response && response.common_diseases){
                updateLoading(false)
                updateDiseases(response.common_diseases)
            }
        })
        .catch(error => {
            updateLoading(false)
            updateError(error)
        })
    },[])

    const handleClick= (event)=>{
        diseases
    }
    
    return (<>
        {
            Object.keys(diseases).map((data, index) => (
                <div value={data} onClick={handleClick}>
                    {data}
                </div>
            ))
        }
    </>)
}

export default Diseases;