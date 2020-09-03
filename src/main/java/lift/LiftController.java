package lift;

import pojo.LiftState;

public class LiftController {
	
	public LiftState getCurrentState() {
		LiftControllerFuncGetCurrentState v_fn;
		v_fn = new LiftControllerFuncGetCurrentState();
		v_fn.startFunction();
		return v_fn.getResult();
	}
	
	public void requestLift() {
		LiftControllerFuncRequestLift v_fn;
		v_fn = new LiftControllerFuncRequestLift();
		v_fn.startFunction();
	}
	
	public void addLiftDestination() {
		LiftControllerFuncAddLiftDestination v_fn;
		v_fn = new LiftControllerFuncAddLiftDestination();
		v_fn.startFunction();
	}

}
