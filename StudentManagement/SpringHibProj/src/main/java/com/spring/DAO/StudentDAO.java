package com.spring.DAO;

import java.util.List;

import com.spring.entities.Student;

public interface StudentDAO {
	List<Student> getAllStudents();
    void saveStudent(Student student);
    Student getStudentById(int id);
    void deleteStudent(int id);
    
}
