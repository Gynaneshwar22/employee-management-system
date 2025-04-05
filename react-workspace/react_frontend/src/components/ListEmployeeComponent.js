import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {Link} from 'react-router-dom';

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state={employees:[]}
    }
    componentDidMount(){
        EmployeeService.getEmployees().then(res=>{
            this.setState({employees:res.data})
        })
    }
    deleteEmployee=(id)=>{
        EmployeeService.deleteEmployee(id).then(res=>{
            EmployeeService.getEmployees().then(res=>{
                this.setState({employees:res.data})
                })
            
        }).catch(error=>{
            console.log(error)
        })
    }
  render() {
    return (
      <div>
        <h2 className='text-center mb-5  h-100' style={{marginTop:'100px'}}>Employee List</h2>
        <div className='row mt-1' style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid #ddd' }}>
            
            <table className='table  table-bordered table-striped table-hover text-center'>
                <thead className='text-white' style={{backgroundColor:'#0d6efd' , color:'white',position: 'sticky', top: 0, zIndex: 1}}>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link to={`/update-employee/${employee.id}`} className='btn btn-info'>update</Link>
                                        {/*${employee.id}- This ensures the id is inserted dynamically */}
                                        <button className='btn btn-danger ms-3' onClick={()=>{this.deleteEmployee(employee.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
            
        </div>
        <div className="text-center mt-2 mb-4 w-100">
        <Link to='/add-employee' className='btn btn-outline-primary mb-3 w-100'>Add Employee</Link>

  </div>
        
      </div>
    )
  }
}
