<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<title>Home</title>
</head>
<body>
<form method="post" action="Login.do">
	<input type="text" id="userId" value="">
	<input type="password" id="userPw" value="">	
	<input type="submit" value="로그인">
</form>
</body>
</html>
