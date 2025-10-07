package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.DAO.StudentDAO;
import com.spring.entities.Student;
@Service
public class StudentServiceImpl implements StudentService {
	
	 	@Autowired
	    private StudentDAO studentDAO;

	    @Override
	    @Transactional
	    public List<Student> getAllStudents() {
	        return studentDAO.getAllStudents();
	    }

	    @Override
	    @Transactional
	    public void addStudent(Student student) {
	        studentDAO.saveStudent(student);
	    }
	    
	    @Override
	    @Transactional
	    public Student getStudentId(int id) {
	    	return studentDAO.getStudentById(id);
	    }
	    
	    @Override
	    @Transactional
	    public void delete(int id) {
	    	studentDAO.deleteStudent(id);
	    }
}
