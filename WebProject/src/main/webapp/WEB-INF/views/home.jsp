<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/home.js/"/>"></script>	
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>	
	<!-- DataDropper -->
	<script type="text/javascript" src="<c:url value="/resources/js/datedropper.js/"/>"></script>
	<link href="<c:url value="/resources/css/datedropper.css"/>" rel="stylesheet" ></link>	
	
	<link rel="shortcut icon" type="image/x-icon" href="http://www.example.com/favicon.ico" />	
	<title>할라.피.뇨(Halla.P.No)</title>
</head>
<body>
<div id="div_root">
	<div id="div_top">
		<div id="div_logo">
			<img alt="travel_logo" src="<c:url value="/resources/img/travel_logo.png"/>" style="width: 30%;height: auto;">
		</div>
		<div id="div_login">
			<input type="text" name="userId" id="userId" value=""><br/>
			<input type="password" name="userPw" id="userPw" value=""><br/>
			<input type="button" id="loginBtn" value="로그인" onclick="login();">	
			<a href="http://localhost:8080/project/join">가입</a>
		</div>
	</div>
	<div id="div_search">
		<div class="search_context" id="search_type">
			<ul class="search_type">
				<li><a rel="round" class="active" style="color:red" >왕복</a></li>
				<li><a rel="multi">다구간</a></li>
				<li><a rel="oneway">편도</a></li>
			</ul>		
		</div>
		<div class="search_context" id="search_info" style="display:block;">
			<div class="search_context" id="search_city">
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="departure_city_loc" id="departure_city_loc">					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="destination_city_loc" id="destination_city_loc">
				</div>
			</div>
			<div class="search_context" id="search_date">
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
				<div class="input_cal end">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
				<div class="input_traveler">
					<img alt="input_traveler_logo" src="<c:url value="/resources/img/input_traveler_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>				
		</div>
		<div class="search_context" id="search_multi_info" style="display:none;">
			<div class="input_traveler">
					<img alt="input_traveler_logo" src="<c:url value="/resources/img/input_traveler_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
			</div>
			<div class="search_context" id="search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="departure_city_loc" id="departure_city_loc_1">					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="destination_city_loc" id="destination_city_loc_1">
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context" id="search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="departure_city_loc" id="departure_city_loc_2">					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input type="text" name="destination_city_loc" id="destination_city_loc_2">
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>			
		</div>
		<div class="" id="">
		
		</div>
	</div>	
</div>
</body>
</html>
