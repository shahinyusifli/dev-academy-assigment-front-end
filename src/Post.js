import React, { useState } from "react";

const PizzaPost = () => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   
   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { name, description };
  
      fetch('/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
      })
    }
  
   
   return (<>
      <div>
         here 
      <form onSubmit={handleSubmit}>
      <h3>
         <input onChange={(evt) => setName(evt.target.value)} value={name} /> 
      </h3>
      <div>
         <input onChange={(evt) => setDescription(evt.target.value)} value={description} />
      </div>

      <div>
         <input onChange={(evt) => setDescription(evt.target.value)} value={description} />
      </div>
     
      <div><button>Save</button></div>
      </form>
   
      </div>
   </>);
}




export default PizzaPost;