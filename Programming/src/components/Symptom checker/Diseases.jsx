import { createContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Symptoms from "./Symptoms";
function Diseases(){
    let d = {
        "Common Cold": ["Runny nose", "Sneezing", "Cough", "Sore throat", "Mild fever", "Congestion"],
        "Influenza (Flu)": ["High fever", "Chills", "Body aches", "Fatigue", "Cough", "Headache", "Sore throat"],
        "COVID-19": ["Fever", "Dry cough", "Fatigue", "Loss of taste or smell", "Shortness of breath", "Sore throat"],
        "Pneumonia": ["Cough with phlegm", "Fever", "Shortness of breath", "Chest pain", "Fatigue"],
        "Diabetes (Type 2)": ["Frequent urination", "Increased thirst", "Unexplained weight loss", "Fatigue", "Blurred vision"],
        "Hypertension (High Blood Pressure)": ["Often asymptomatic", "Headaches", "Shortness of breath", "Nosebleeds", "Dizziness"],
        "Asthma": ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing, especially at night"],
        "Bronchitis": ["Persistent cough", "Mucus production", "Fatigue", "Chest discomfort", "Mild fever"],
        "Tuberculosis (TB)": ["Persistent cough", "Coughing up blood", "Weight loss", "Night sweats", "Fever", "Fatigue"],
        "Migraine": ["Throbbing headache", "Nausea", "Vomiting", "Sensitivity to light", "Sensitivity to sound"],
        "Gastritis": ["Stomach pain", "Nausea", "Vomiting", "Bloating", "Loss of appetite"],
        "Urinary Tract Infection (UTI)": ["Burning sensation during urination", "Frequent urination", "Cloudy urine", "Pelvic pain"],
        "Depression": ["Persistent sadness", "Loss of interest", "Fatigue", "Changes in sleep", "Feeling worthless"],
        "Anxiety Disorder": ["Excessive worry", "Restlessness", "Irritability", "Difficulty concentrating", "Sleep disturbances"],
        "Chickenpox": ["Itchy rash", "Blisters", "Fever", "Fatigue", "Loss of appetite"],
        "Measles": ["High fever", "Cough", "Runny nose", "Red eyes", "Skin rash"],
        "Malaria": ["Fever", "Chills", "Sweating", "Headache", "Nausea", "Muscle pain"],
        "Dengue Fever": ["High fever", "Severe headache", "Pain behind eyes", "Joint pain", "Skin rash", "Nausea"],
        "Appendicitis": ["Sudden abdominal pain", "Pain in lower right abdomen", "Nausea", "Fever", "Loss of appetite"],
        "Acid Reflux (GERD)": ["Heartburn", "Chest pain", "Regurgitation", "Sore throat", "Chronic cough"]
      }
    // state to hold the api
    let [diseases, updateDiseases] = useState()
    let [selected, updateSelected] = useState(false)

    
    const handleDone = ()=>{
        updateSelected(false)
    }
    
    const handleClick = (data)=>{
        updateSelected(true)
        updateDiseases(data)
    }
    
    return (<>
         <div className='MainDiv'>
        {!selected?
        (<Table striped bordered hover>
        <tbody>
          {Object.keys(d).map((data, index) => (
              <tr key={index} 
              value="false" 
              onClick={() => handleClick(data)}>
                  <td>{data}</td>
              </tr>
          ))}
        </tbody>
      </Table>):
      (
        <>
        <div>
        <Symptoms disease={diseases} Symptoms={d[diseases]} />
        <Button className="stl1"  onClick={handleDone}>Done</Button>
        </div>
        </>
      )
      }
      </div>
    </>)
}

export default Diseases;