<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<fmt:formatDate var="version" value="${today}" pattern="yyyyMMDDHHmmss"/>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/value.js/"/>?version=${version}"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/home.js/"/>?version=${version}"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/function.js/"/>?version=${version}"></script>		
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>	
	<!-- DataDropper -->
	<script type="text/javascript" src="<c:url value="/resources/js/datedropper.js/"/>"></script>
	<link href="<c:url value="/resources/css/datedropper.css"/>" rel="stylesheet" ></link>	
	<!-- Home Page Icon -->
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
			<input type="button" id="loginBtn" value="로그인">	
			<a href="http://localhost:8080/project/join">가입</a>
		</div>
	</div>
	<div id="div_search">	
		<div class="search_context">
			<div class="trip_type">
				<ul class="search_type">
					<li><a rel="round" class="active" style="color:red" >왕복</a></li>
					<li><a rel="multi">다구간</a></li>
					<li><a rel="oneway">편도</a></li>				
				</ul>
			</div>
			<div class="search_button">
				<ul>
					<li><input type="button" id="searchButton" value="검색" ></li>
				</ul>
			</div>
		</div>
		
		<div class="search_context" id="search_info" style="display:block;">
			<div class="search_context search_city">
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>		
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
					<input type="text" readonly value="성인1명,유/소아0명,등급:이코노미">
 					<div class="traveler_list modal" style="">
					<!-- 인원수, 등급 등록 -->
					</div>
				</div>
			</div>				
		</div>
		<div class="search_context" id="search_multi_info">
			<div class="input_traveler">
				<img alt="input_traveler_logo" src="<c:url value="/resources/img/input_traveler_logo.png"/> " style="width: 30px;height: 24px;">
				<input type="text" readonly value="성인1명,유/소아0명, 등급:이코노미">
				<div class="traveler_list modal" style="">
				<!-- 인원수, 등급 등록 -->
				</div>
			</div>
			<div class="search_context search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >	
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>					
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>	
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >		
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>				
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>	
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >		
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>				
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>	
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >		
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>				
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>	
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>
			<div class="search_context search_city">				
				<div class="input_city departure">
					<img alt="departure_city_logo" src="<c:url value="/resources/img/start_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="departure_city_loc" >		
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>				
				</div>
				<div class="input_city destination">
					<img alt="destination_city_logo" src="<c:url value="/resources/img/end_city_logo.png"/> " style="width: auto;height: 24px;">
					<input class="city_loc" type="text" placeholder="국가, 도시" name="destination_city_loc" >
					<div class="city_loc_list modal">
						<ul id="city_loc_ul">
							<!-- 국가, 도시 리스트 -->							
						</ul>				
					</div>	
				</div>
				<div class="input_cal start">
					<img alt="input_cal_logo" src="<c:url value="/resources/img/input_cal_logo.png"/> " style="width: 30px;height: 24px;">
					<input type="text">
				</div>
			</div>			
		</div>					
	</div>	
	<div id="div_result">
			<!--  검색 결과  -->
			<div class="flight_summary_info">
				
			
			</div>			
		</div>	
</div>
</body>
</html>
