<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<fmt:formatDate var="version" value="${today}" pattern="yyyyMMDD"/>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/home.js/"/>?version=${version}"></script>	
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>	
	<!-- DataDropper -->
	<script type="text/javascript" src="<c:url value="/resources/js/datedropper.js/"/>"></script>
	<link href="<c:url value="/resources/css/datedropper.css"/>" rel="stylesheet" ></link>	
	
	<link rel="shortcut icon" type="image/x-icon" href="http://www.example.com/favicon.ico" />	
	<title></title>
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
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
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
					<input type="text" readonly value="성인 : 1, 유/소아 : 0">
					<div class="traveler_list hide" style="">
						<div class="traveler_person"> 
							<ul>
								<li><span class="text">인원</span></li><br/>
								<li><span class="text">성인</span><div class="adult count"><a class="button minus"></a><span class="number">1</span><a class="button plus"></a></div></li>
								<li><span class="text">유/소아</span><div class="children count"><a class="button minus"></a><span class="number">0</span><a class="button plus"></a></div></li>
							</ul>
						</div>
						<div class="traveler_grade">
							<ul>
								<li><span class="text">등급</span></li>
								<li><span class="text">이코노미</span></li>
								<li><span class="text">비즈니스</span></li>								
							</ul>
						</div>
					</div>
				</div>
			</div>				
		</div>
		<div class="search_context" id="search_multi_info">
			<div class="input_traveler">
					<img alt="input_traveler_logo" src="<c:url value="/resources/img/input_traveler_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
			</div>
			<div class="search_context" id="search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context" id="search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
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
