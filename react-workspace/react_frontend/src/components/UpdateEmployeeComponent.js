import React, { useEffect, useState } from 'react'

import { useNavigate,useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
export default function UpdateEmployeeComponent(props) {
    let navigate=useNavigate();
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const {id}=useParams();

    useEffect(()=>{
       EmployeeService.getEmployeeById(id).then(res=>{
        console.log("Fetched data:", res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
       }).catch(error=>{
            console.log(error);
       });
    },[])

    const updateHandler=(e)=>{
        e.preventDefault();
        const employee={firstName,lastName,email};

        if(id){
            EmployeeService.updateEmployee(id,employee).then(res=>{
                navigate('/employees');
            })

        }
        else{
            EmployeeService.createEmployee(employee).then(res=>{
                console.log(res.data);
                navigate('/employees');
            })
        }
    }
    const cancelHandler=(e)=>{
        navigate('/employees');
    }
  return (
    <div className='container mt-5'>
       <div className='row'> {/* offset-md-3 - it moves after 3 columns space*/}
        <div className='card col-md-6 offset-md-3 '> {/* col-md-6 - it takes 6columns space out of 12columns screen (half),  */}
            <h3  className='text-center'>Add Employee </h3>  {/*text-center - to add text to center */}
            <div className='card-body'>
                <form>
                    <div className=' form-group my-2'>  {/*form-group -A wrapper class used to group labels, inputs, selects, or textareas together.*/}
                        <label>First Name:</label>       {/* form-control- Applied to <input>, <select>, and <textarea> elements,Gives them full width, padding, border-radius, and consistent look.*/}
                        <input type='text' placeholder='Enter First Name' name='firstName' className='form-control'  value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    {/* The onChange event updates the state (setEmployee) */}
                    <div className='form-group my-2'>
                        <label>Last Name:</label>
                        <input placeholder='Enter Last Name' name='lastName' className='form-control' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>

                    <div className='form-group my-2'>
                        <label>Email ID:</label>
                        <input placeholder='Enter Email Id..' name='email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                        <button className="btn btn-success px-4 " onClick={updateHandler}>Save</button>
                       {/*       d-flex	                Makes it a flex container
                                justify-content-center	Horizontally centers the buttons
                                gap-3	                Adds space between buttons (Bootstrap spacing scale)
                                mt-3	                Adds top margin
                                flex-wrap	            Makes buttons wrap on small screens(ONE BElow the other)
                                px-4                	Adds left/right padding for wider buttons */}
                        <button className="btn btn-danger px-4" onClick={cancelHandler}>Cancel</button>
                    </div>
                </form>
            </div>

        </div>

       </div>
    </div>
  )
}
