//ajax 를 통한 로그인 프로세스 진행
function login() {
	jQuery.ajax({
		type : "POST",
		url : "login.do",
		data : {
			userId : $("#userId").val(),
			userPw : $("#userPw").val()
		},
		datatype : "JSON",
		contenttype : "application/json;",
		success : function(obj) {
			callbacklogin(obj);
		},
		error : function(xhr, status, error) {
			console.log(xhr);
		}
	})
}
//ajax 실행 결과 후처리
function callbacklogin(obj) {
	if (obj.resultCode != null || length(obj.resultCode) > 0) {
		alert(obj.resultCode);
	} else {
		alert('성공');
		// 로그인 화면으로 전환
	}
}

function join(){
	
}