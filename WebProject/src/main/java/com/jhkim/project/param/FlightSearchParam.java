package com.jhkim.project.param;

import java.util.List;

public class FlightSearchParam {
	
	private String adultCount ;
	private String childrenCount ;
	private String babyCount ;	 
	private String gradeCode ;
	private String flightType ;
	
	private List<FlightSearchDetailParam> flightParamList;

	public String getAdultCount() {
		return adultCount;
	}

	public void setAdultCount(String adultCount) {
		this.adultCount = adultCount;
	}

	public String getChildrenCount() {
		return childrenCount;
	}

	public void setChildrenCount(String childrenCount) {
		this.childrenCount = childrenCount;
	}

	public String getBabyCount() {
		return babyCount;
	}

	public void setBabyCount(String babyCount) {
		this.babyCount = babyCount;
	}

	public String getGradeCode() {
		return gradeCode;
	}

	public void setGradeCode(String gradeCode) {
		this.gradeCode = gradeCode;
	}

	public String getFlightType() {
		return flightType;
	}

	public void setFlightType(String flightType) {
		this.flightType = flightType;
	}

	public List<FlightSearchDetailParam> getFlightParamList() {
		return flightParamList;
	}

	public void setFlightParamList(List<FlightSearchDetailParam> flightParamList) {
		this.flightParamList = flightParamList;
	}
}
