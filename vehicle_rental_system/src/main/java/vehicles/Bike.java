package vehicles;

import engines.Engine;

public class Bike implements Vehicle_type {

	

	private Engine engine;
	private static boolean bool;

	

	public Bike(Engine engine) {
		this.engine = engine;
		
	}
	public void setBool(boolean bool) {
		this.bool = bool;
	}
	
	
	@Override
	public String rent() {
		return "Bike is available for rent";
		
	
	}

}
