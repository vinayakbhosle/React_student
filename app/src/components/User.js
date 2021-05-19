import React from 'react';


const User=()=>{

    const display =(event)=>{
    event.preventDefault();

    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;

   
    document.getElementById("demo").innerHTML="Your FullName is "+firstname+" "+lastname;
   
}

    return (
        <div>
            <form onSubmit={display}>
            <label>First Name</label>
            <input type='text' id="firstname" name="lastname" placeholder="FirstName"/><br />
            <label>Last Name</label>
            <input type='text' id="lastname" name="lastname" placeholder="LastName"/><br />
            <input type='submit' value='submit'/>
            </form>
            
            {/* <button onClick={display}>Click Me!</button> */}
            <h1 id="demo"></h1>
        </div>
    );
}
 
export default User;