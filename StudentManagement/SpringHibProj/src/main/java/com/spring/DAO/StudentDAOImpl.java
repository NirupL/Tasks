package com.spring.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.entities.Student;
@Repository
public class StudentDAOImpl implements StudentDAO {
	
	  @Autowired
	    private SessionFactory sessionFactory;

	    public List<Student> getAllStudents() {
	        return sessionFactory.getCurrentSession()
	                .createQuery("from Student", Student.class)
	                .getResultList();
	    }

	    public Student getStudentById(int id) {
	        return sessionFactory.getCurrentSession().get(Student.class, id);
	    }

	    public void saveStudent(Student student) {
	        sessionFactory.getCurrentSession().saveOrUpdate(student);
	    }

	    public void deleteStudent(int id) {
	        Student s = getStudentById(id);
	        if (s != null) {
	            sessionFactory.getCurrentSession().delete(s);
	        }
	    }
}
