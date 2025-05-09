import ApiFetch from "../ApiFetch"
import { useEffect, useState} from "react";
import { Card, Button, ListGroup} from "react-bootstrap";
import * as React from 'react';


//"https://newsapi.org/v2/everything?q=apple&from=2025-04-21&to=2025-04-21&sortBy=popularity&apiKey=22f63d877828444b9ba61543b8e2b3fe",
function Home(){

    let [response, updateResponse] = useState([]);
    let [error, updateError] = useState(null);
    let [loading, updateLoading] = useState(true);
    let [indexes, updateIndexes] = useState(9);
    const [x, updateX] = useState(6)
    const [max, updateMax] = useState(0)
    
    useEffect(()=>{
        ApiFetch(`https://newsapi.org/v2/everything?q=nutrition&from=2025-04-23&to=${new Date().toISOString()}&sortBy=popularity`, 
            {
          headers: {
            'Authorization': `Bearer 22f63d877828444b9ba61543b8e2b3fe`, 
          }
        })
        .then(data => {
            
            updateLoading(false);
            updateResponse(data.articles);
            updateMax(data.articles.    length)
        })
        .catch(err => {
            updateLoading(false);
            updateError(err.message);
            
        })
    },[])
    
    const handleReadMore = ()=>{
        console.log(1)
        if ((x+6) < max) updateX(x + 6);

    }
    return <>
        {loading? (<div>Loading...</div>) 
        : (response 
        ? 
            (   <>
                <div className="cardMainContainer item">

                {
                response.slice(0, x).map(data => (
                    <div>
                    <Card className="cardContainer stl2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.urlToImage} className="image"/>
                    <Card.Body>
                        <Card.Title className="header">{data.title}</Card.Title>
                        <Card.Text className="cardBody">
                        {data.description}
                        </Card.Text>
                        <Button className="link stl1" variant="primary" href={data.url}>Read more</Button>
                    </Card.Body>
                    </Card>
                    </div>
                ))}
                <div></div>
                <Button className="stl1" onClick={handleReadMore}>Read more</Button>
                </div>
                </>
            )
            
            : <div>Error: {error}</div>
            )
        }
    </>
    
    
}


export default Home;
