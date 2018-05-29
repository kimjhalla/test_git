<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<script type="text/javascript" src="<c:url value="/resources/js/join.js/"/>"></script>
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>	
	<title>홈</title>
</head>
<body>
<div class="center" id="div_center">
	<div id="joinInfoArea">	
		<input id="userId" type="text" value=""><br/>
		<input id="userPw" type="password" value=""><br/>	
		<input id="userHpCo" type="text" value=""><br/>
		<input id="userHp" type="text" value=""><br/>
		<input id="emailAddr" value="">
	</div>
	<div id="btnArea">
		<input type="button" value="가입" onclick="">
		<a href="http://localhost:8080/project/">이전</a>
	</div>
</div>
</body>
</html>