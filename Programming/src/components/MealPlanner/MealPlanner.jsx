    import { useEffect, useState, useRef} from "react";
    import ApiFetch from "../ApiFetch";
    import { Table ,Button, Form, Card, ListGroup } from "react-bootstrap";
    function MealPlanner(){

        const [meals, updateMeals] = useState([])
        const [error, updateError] = useState(null);
        const [meal, updateMeal] = useState('')
        const [nutrition, updateNutrition] = useState({
                "fat_total_g": 0,
                "sodium_mg": 0,
                "potassium_mg": 0,
                "cholesterol_mg": 0,
                "carbohydrates_total_g": 0,
                "fiber_g": 0,
                "sugar_g": 0,
        })
        const input = useRef('')

        function search(){
            ApiFetch(`https://api.api-ninjas.com/v1/nutrition?query=${input.current.value}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'oT2BcV4EzNa+nmi3iquAcw==uw3ZYFD5eGanlLOa'
                }
            })
                .then((data)=>{
                    console.log(data[0])
                    if (data[0]){

                        updateMeal(data[0])
                    }else{
                        updateMeal(-1)
                    }
                })
                .catch(error => {
                    updateError(error);
                })
            }

    
        const HandleSearch = (event)=> {
            event.preventDefault();
            search();
        }

        const HandleAdd = ()=>{
            updateMeals([meal, ...meals])
            addToNutri()
            updateMeal('')
        }

        function addToNutri(){
            updateNutrition(prev=>{
                if (Object.keys(meal).length > 0){
                const updated = {...prev}
                for (let i of Object.keys(prev)){
                    updated[i] += meal[i]
                }
                return updated;
            }return prev;
            })

        }

        function subFromNutri(index){
            updateNutrition(prev=>{
                if (Object.keys(meals[index]).length > 0){
                const updated = {...prev}
                for (let i of Object.keys(prev)){
                    updated[i] -= meals[index][i]
                }
                return updated;
            }return prev;
            })
        }

        const HandleDelet = (index)=>{
            subFromNutri(index);
            updateMeals(meals.filter((_, i)=> i !== index))
        }

        return (<>
            <div className="MainDiv">
            <Form>
            <Form.Group className="mb-3 Inp" controlId="formBasicEmail">
                <Form.Label>Search:</Form.Label>
                <Form.Control ref={input} type="text" step="any" placeholder="Search for food" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            
            <Button className="stl1" variant="primary" type="submit" onClick={HandleSearch}>
                Submit
            </Button>
            </Form>

            {
                (meal != -1 && meal != '')?
                    <>
                    <Card className="Card">
                    <ListGroup variant="flush">
                        <ListGroup.Item>{meal.name}</ListGroup.Item>
                        <ListGroup.Item>Fat: {meal.fat_total_g} g</ListGroup.Item>
                        <ListGroup.Item>Sodium: {meal.sodium_mg} mg</ListGroup.Item>
                        <ListGroup.Item>Potassium: {meal.potassium_mg} mg</ListGroup.Item>
                        <ListGroup.Item>Cholesterol: {meal.cholesterol_mg} mg</ListGroup.Item>
                        <ListGroup.Item>Carbohydrates: {meal.carbohydrates_total_g} g</ListGroup.Item>
                        <ListGroup.Item>Fiber: {meal.fiber_g} g</ListGroup.Item>
                        <ListGroup.Item>Sugar: {meal.sugar_g} g</ListGroup.Item>
                        <ListGroup.Item><Button className="stl1" variant="primary" type="submit" onClick={HandleAdd}>Add</Button></ListGroup.Item>     
                    </ListGroup>
                    </Card>
                    
                    </>:
                    (
                        meal == -1 &&
                        <div>Food not found</div>
                    )
            }
            {
                meals.length > 0 && 
                <>
                    
                    {
                        
                        meals.map((data, index) => (
                            
                            <Card className="Card">
    
                            <ListGroup variant="flush">
                                <ListGroup.Item>{data.name}</ListGroup.Item>
                                <ListGroup.Item>Fat: {data.fat_total_g} g</ListGroup.Item>
                                <ListGroup.Item>Sodium: {data.sodium_mg} mg</ListGroup.Item>
                                <ListGroup.Item>Potassium: {data.potassium_mg} mg</ListGroup.Item>
                                <ListGroup.Item>Cholesterol: {data.cholesterol_mg} mg</ListGroup.Item>
                                <ListGroup.Item>Carbohydrates: {data.carbohydrates_total_g} g</ListGroup.Item>
                                <ListGroup.Item>Fiber: {data.fiber_g} g</ListGroup.Item>
                                <ListGroup.Item>Sugar: {data.sugar_g} g</ListGroup.Item>
                                <ListGroup.Item><Button className="stl1" onClick={()=>HandleDelet(index)}>Delete</Button></ListGroup.Item>     
                            </ListGroup>
                            </Card>
                            
                        ))
                        
                    }
                <Card className="Card">
                <ListGroup variant="flush">
                    <ListGroup.Item>Total</ListGroup.Item>
                    <ListGroup.Item>Fat: {nutrition.fat_total_g} g</ListGroup.Item>
                    <ListGroup.Item>Sodium: {nutrition.sodium_mg} mg</ListGroup.Item>
                    <ListGroup.Item>Potassium: {nutrition.potassium_mg} mg</ListGroup.Item>
                    <ListGroup.Item>Cholesterol: {nutrition.cholesterol_mg} mg</ListGroup.Item>
                    <ListGroup.Item>Carbohydrates: {nutrition.carbohydrates_total_g} g</ListGroup.Item>
                    <ListGroup.Item>Fiber: {nutrition.fiber_g} g</ListGroup.Item>
                    <ListGroup.Item>Sugar: {nutrition.sugar_g} g</ListGroup.Item>    
                </ListGroup>
                </Card>
                    
                </>
                
            }
            </div>
        </>)
    }

    export default MealPlanner;