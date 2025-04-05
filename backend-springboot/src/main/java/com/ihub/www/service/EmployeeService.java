package com.ihub.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.repository.EmployeeRepository;
import java.util.List;

import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.model.Employee;
@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	public Employee getEmployeeByID(long id) {
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("ID Not Found"));
	}
	public ResponseEntity<Employee> updateEmployee(long id,Employee employee){
		Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		
		Employee updateEmp=employeeRepository.save(emp);
		return ResponseEntity.ok(updateEmp);
	}
	public ResponseEntity<HttpStatus> deleteEmployee(long id){
		Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee Not Found"));
		employeeRepository.delete(emp);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
}
