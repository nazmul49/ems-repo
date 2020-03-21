package com.example.ems.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ems.dto.EmployeeDto;
import com.example.ems.entity.Employee;
import com.example.ems.repositoties.EmployeeRepository;
import com.example.ems.services.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	public EmployeeRepository employeeRepository;

	private ModelMapper employeeMapper;

	@Autowired
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
		employeeMapper = new ModelMapper();
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employeeList = employeeRepository.findAll();
		List<EmployeeDto> employees = new ArrayList<>();
		employeeList.forEach(employee-> {
			employees.add(employeeMapper.map(employee, EmployeeDto.class));
		});
		System.out.println("Employee List: " +employees);
		return employees;
	}

	@Override
	public void addEmployee(EmployeeDto employeeDto) {
		Employee employee = employeeMapper.map(employeeDto, Employee.class);
		employeeRepository.save(employee);
	}

	@Override
	public void deleteEmployee(int empId) {
		// TODO Auto-generated method stub

	}

}
