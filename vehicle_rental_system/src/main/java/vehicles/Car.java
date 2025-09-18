package vehicles;

import engines.Engine;
import rentalService.Rent_Service;

public class Car implements Vehicle_type {

	private Engine engine;
	private static boolean bool;

	

	public Car(Engine engine) {
		this.engine = engine;
		
	}
	public void setBool(boolean bool) {
		this.bool = bool;
	}
	
	
	@Override
	public String rent() {
		return "Car is available for rent";
	
	}

}
