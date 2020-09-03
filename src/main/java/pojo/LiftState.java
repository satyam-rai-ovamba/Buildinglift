package pojo;

import java.util.SortedSet;

public class LiftState {
	private int floor;
	private boolean direction; // change 
	private SortedSet<Integer> destinationList;
	
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public boolean getDirection() {
		return direction;
	}
	public void setDirection(boolean direction) {
		this.direction = direction;
	}
	public SortedSet<Integer> getDestinationList() {
		return destinationList;
	}
	public void setDestinationList(SortedSet<Integer> destinationList) {
		this.destinationList = destinationList;
	}
}
