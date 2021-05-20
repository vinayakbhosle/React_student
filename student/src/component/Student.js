import React from 'react'
 
class Student extends React.Component{
    render(){
        this.state=[
            {id:"1",rollno:"10",firstname:"vinayaka",age:"20"},
            {id:"2",rollno:"11",firstname:"mahesh",age:"20"},
            {id:"3",rollno:"12",firstname:"Kiran",age:"20"},
        ];
        return(
            <div>
                <h1>Student Details are</h1>
                <span>------------------------------------------------</span>
               {this.state.map((userinfo)=>{
                   return(
                       <div>
                           <h2>Student Id:{userinfo.id}</h2>                     
                            <h2>RollNo   :{userinfo.rollno}</h2>
                            <h2>Name     :{userinfo.firstname}</h2>                     
                            <h2>Age      :{userinfo.age}</h2>
                            <span>------------------------------------------------</span>
                       </div>
                   )
               })}
            </div>
        );
    }
    
}

export default Student;