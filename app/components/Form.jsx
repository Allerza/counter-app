import {useState} from 'react'


function Form(props){
   
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")


   function handleClick(){
    

        props.submitFavLink({name, URL})


   }

   function handleNameInputChange(event){
    console.log(event.target.value)
    setName(event.target.value)
   }

   function handleURLInputChange(event){
    console.log(event.target.value)
    setURL(event.target.value)
   }

   return(
    <div>
    <form>
        <label>Name</label>
        <input type ="text" onChange={handleNameInputChange}/>

        <label>URL</label>
        <input type ="text" onChange={handleURLInputChange}/>


    </form>
    <button onClick={handleClick}>Submit</button>

    </div>
   )

}

export default Form