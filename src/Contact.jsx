import React, { useState } from "react";




const Contact = () => {
   const [data,setdata]= useState({
      fullname: "",
      email: "",
      Phone: "",
      course: "",
   });

   const input =(event)=>{
       const {name,value}=event.target;
       setdata((preval)=>{
         return {...preval, [name]: value}
       });
   };



   const formSubmit=(e)=>{
      e.preventDefault()
      const store = [data]
      console.log(store)
   }
   return (<>
      <div class="container">
         <h1 className="text-center">Contact Us</h1>
         <p className="text-center">Please fill out the form below to contact us.</p>
         <form onSubmit={formSubmit}>
            <div className="mb-3">
               <label for="name" className="form-label">Name</label>
               <input type="text" className="form-control" name="fullname" id="name" required value = {data.fullname} onChange={input}/>
            </div>
            <div className="mb-3">
               <label for="email" className="form-label">Email address</label>
               <input type="email" className="form-control" name="email" id="email" required value = {data.email} onChange={input}/>
            </div>
            <div className="mb-3">
               <label for="Number" className="form-label">Phone Number</label>
               <input type="Number" className="form-control" name="Phone" id="number" required value = {data.Phone} onChange={input}/>
            </div>
            
               <div className="form-group">
                  <label for="course">Please Select a Service</label>
                  <select className="form-control" id="fruit" value={data.course} name="course" onChange={input}>
                     <option value="PMs">Protfolio Management</option>
                     <option value="Charting" className="bg-nav">Basic to Advance Technical</option>
                  </select>
               </div>
            
            <button type="submit" class="btn btn-primary d-block m-auto px-3 my-5">Submit</button>
         </form>
      </div>
   </>)
};
export default Contact;