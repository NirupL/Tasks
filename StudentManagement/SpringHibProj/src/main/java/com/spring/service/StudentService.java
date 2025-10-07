package com.spring.service;

import java.util.List;

import com.spring.entities.Student;

public interface StudentService {
	
	List<Student> getAllStudents();
    void addStudent(Student student);
    Student getStudentId(int id);
    void delete(int id);
}
