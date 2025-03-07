
"use client";

import {useState} from "react"//we use this to add state to our components
//state lets us keep track of changing data and show it in the component 

function HomePage(){

    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Add One </button>
        </div>
    )
}

export default HomePage;
