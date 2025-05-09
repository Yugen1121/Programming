import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import "../Styles.css"
function Symptoms({disease, Symptoms=[]}){


    let [indexes, updateIndexes] = useState([])
    let [result, updateResult] = useState("")

    const handleClick = (index)=>{
        if (!indexes.includes(index)){
            updateIndexes([...indexes, index])
        }else {
            updateIndexes(indexes.filter(i => i !== index))
        }
    }

    const handleSubmit = ()=>{
        if (indexes.length/Symptoms.length >= 0.6){
            updateResult(`You are likely to have ${disease}. Please get yourself checked`)
        }else {
            updateResult(`Even though the symptoms do not match. Please get youself checked.`)
        }
    }

    

    return (
        <>
        <div className='MainDiv'>
        <h2>{disease}</h2>
        {result && (result)}
        <Table striped bordered hover>
          <tbody>
            {Symptoms.map((data, index) => (
                <tr key={index} 
                value="false" 
                onClick={() => handleClick(index)}>
                    <td className={indexes.includes(index)? "highlight-green" : "highlight-red"}>{data}</td>
                </tr>
            ))}
          </tbody>
        </Table>
        <Button className="stl1" onClick={handleSubmit} variant="primary" type="submit" >
            Submit
        </Button>
        </div>
        </>
      );
}

export default Symptoms;