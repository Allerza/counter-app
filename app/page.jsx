
"use client";

import {useState} from "react"//we use this to add state to our components
//state lets us keep track of changing data and show it in the component 

import Form from "./components/Form"
import Table from "./components/Table"

function HomePage(){
    const [favLinks, setFavLinks] =useState([])
    
    function handleNewFavLink(favLink){
        console.log(favLink, "in HomePage")

        let newFavLinks = [...favLinks, favLink]
        
        
        setFavLinks(newFavLinks)
    }
    return (
        <div>
   
           <h1>FavLinks</h1>
            
            <Form submitFavLink={handleNewFavLink}/>

            {/*A table to show the user's input*/}
            <Table data={favLinks}/>
            
            {/*time stamp: 12:24*/}
        
        </div>
    )
}
 
export default HomePage
 