import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import "./Styles.css"
function Symptoms({disease, Symptoms}){

    Symptoms = ["asdas", "dasdsa", "dqwdq"]

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
        {result && <div>{result}</div>}
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
        <Button onClick={handleSubmit} variant="primary" type="submit" >
            Submit
        </Button>
        </>
      );
}

export default Symptoms;