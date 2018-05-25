<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	<script type="text/javascript" src="<c:url value="/resources/js/jquery-3.3.1.js/"/>"></script>
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>
	<link href="<c:url value="/resources/css/home.css"/>" rel="stylesheet" ></link>
	<script type="text/javascript">
		function ajax(){
			jQuery.ajax({
				type:"POST",
				url:"Login.do",
				data:{
					userId : $("#userId").val(),
					userPw : $("#userPw").val()					
				},
				datatype:"json",
				contenttype:"application/json;",
				success:function(obj){console.log('!!');},
				error : function(xhr,status,error){
					console.log(xhr);
				}
			})
		}
	
	</script>
	<title>Home</title>
</head>
<body>
<div id="div_root">
<div id="div_top">
<div id="div_login">
	<input type="text" name="userId" id="userId" value=""><br/>
	<input type="password" name="userPw" id="userPw" value=""><br/>	
	<input type="button" id="joinBtn" value="가입"><input type="button" id="loginBtn" value="로그인" onclick="ajax();">
<div id="div_main">
	
</div>
</div>
</div>
</div>
</body>
</html>
