package pojo;

import java.util.SortedSet;

public class LiftState {
	private int floor;
	private String direction; // change 
	private SortedSet<Integer> destinationList;
	
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public SortedSet<Integer> getDestinationList() {
		return destinationList;
	}
	public void setDestinationList(SortedSet<Integer> destinationList) {
		this.destinationList = destinationList;
	}
}
