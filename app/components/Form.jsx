function Form(){
   
   function handleClick(){
    alert("Clicked!")
   }
   
    return( 
        <div>
            {/*form for the user to input date*/}
        
                 <form>
                    <label>Name </label>
                    <input type="text" />

                    <label>URL</label>
                    <input type="text" />

                </form>

            <button onClick={handleClick}>Submit</button>

         </div>

        )

}

export default Form