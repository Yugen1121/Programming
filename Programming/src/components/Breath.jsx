import { useState, useEffect } from "react";
import "./Styles.css"


function BreathingHelper(){

    //buttom to start
    const [state, updateState] = useState(false)

    //scale to chnage the size 
    const [scale, updateScale] = useState(1)

    //to change the text
    const [text, updateText] = useState("Click")
    useEffect(()=>{
        if (!state){
            updateText("Click")
            updateScale(1)
            return
        };
        updateScale((prev)=>(prev === 1? 5: 1))
        updateText((prevtext)=>(prevtext === "Inhale" ? "Exhale": "Inhale"))
        const interval = setInterval(()=>{
            updateScale((prev)=>(prev === 1? 5: 1))
            updateText((prevtext)=>(prevtext === "Inhale" ? "Exhale": "Inhale"))
        }, 4000)

        return () => clearInterval(interval)
    }, [state])

    let Style = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "blue",
        background: `radial-gradient(circle, rgba(0, 0, 255, 1) 20%, rgba(0, 0, 255, 0) 60%)`,
        transform: `scale(${scale})`,
        transition: `transform 4s ease, background 6s ease`
    }

    return (<>
        <div className="container1">
            <div className="container1" style={Style}>
                <div onClick={()=>{updateState((p)=>(!p)

                )}}>{text}</div>
            </div>
        </div>
    </>)

}

export default BreathingHelper;
