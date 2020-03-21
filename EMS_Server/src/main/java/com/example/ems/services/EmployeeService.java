package com.example.ems.services;

import java.util.List;

import com.example.ems.dto.EmployeeDto;

public interface EmployeeService {
	public List<EmployeeDto> getAllEmployees();

	public void addEmployee(EmployeeDto employeeDto);

	public void deleteEmployee(int empId);
//	public Employee findEmployee(int empId);
}
