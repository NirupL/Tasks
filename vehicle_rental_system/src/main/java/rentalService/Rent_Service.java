package rentalService;

import vehicles.Vehicle_type;

public class Rent_Service {

	private static boolean bool;
	private Vehicle_type vehicle;
	
	public void setVehicle(Vehicle_type vehicle) {
		this.vehicle = vehicle;
	}
	
	public void setBool(boolean bool) {
		this.bool = bool;
	}

	public String checkAvailability() {
		if(bool) return this.vehicle.rent();
		return "Vehicle is already booked";
	}
}
