package com.example.ems.repositoties;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
