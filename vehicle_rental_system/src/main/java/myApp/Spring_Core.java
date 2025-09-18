package myApp;

import java.util.Scanner;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import rentalService.Rent_Service;
import vehicles.Car;
import vehicles.Vehicle_type;

public class Spring_Core {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
		Vehicle_type bean = context.getBean("car_petrol",Vehicle_type.class);
		Rent_Service service = context.getBean("rent_vehicle",Rent_Service.class);
		Rent_Service service1 = context.getBean("rent_vehicle1",Rent_Service.class);
		Vehicle_type bean1 = context.getBean("bike_petrol",Vehicle_type.class);
		
		Scanner sc = new Scanner(System.in);
		System.out.println("1.Car\n2.Bike\n ");
		System.out.println("-----------");
		System.out.println("Enter your choice");
		int choice = sc.nextInt();
		switch (choice) {
		case 1:
			System.out.println("Enter the type of engine: Petrol/Diesel");
			String type = sc.next();
			if(type.equalsIgnoreCase("Petrol")) {
				System.out.println(service.checkAvailability()); 
			}
			else {
				System.out.println(service.checkAvailability());
			}
			break;
		case 2:
			System.out.println("Enter the type of engine: Petrol/Diesel");
			String type1 = sc.next();
			if(type1.equalsIgnoreCase("Petrol")) {
				System.out.println(service1.checkAvailability()); 
			}
			else {
				System.out.println(service1.checkAvailability());
			}
		default:
			break;
		}

	}

}
