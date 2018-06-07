$(document).ready(function (){
	
	
	// 날짜 검색 UI
	$(".input_cal").find("input").each(function(){		
		$(this).attr({
			"data-lang" : "ko",
			"data-translate-mode": "true",
			"data-large-default":"true",
			"data-large-mode":"true",
			"data-format":"Y-m-d"
		});
		$(this).dateDropper();
	});
	
	// 검색 유형(왕복, 편도, 다구간)
	$(".search_type li").click(function(){
		$(this).parent("ul").find("a").removeClass("active");	/* active 클래스 삭제 */
		$(this).parent("ul").find("a").css("color","black");	/* 글자 색 검은색 설정 */
		$(this).find("a").addClass("active");					/* 클릭한 a 태그 active 클래스 추가 */
		$(this).find("a").css("color","red");					/* 클릭한 a 태크 빨간색 설정 */		
		
		// 검색 유형 클릭시 이벤트 발생
		clickSearchType($(this).find("a"));
		
	})
	
	// 검색 유형 클릭시 이벤트 발생
	function clickSearchType(a){
		var lastInput = $("#search_date .end").find("input");
		
		// 도착 시간 활성화/비활성화 설정 		
		if(a.attr("rel") == "oneway"){
			lastInput.attr("readonly",false);
			lastInput.attr("disabled",true);
		}
		else{
			lastInput.attr("readonly",true);
			lastInput.attr("disabled",false);
		}		
		
		// 다구간일 경우 검색 폼 재설정 
		if(a.attr("rel") == "multi"){			
			$("#search_info").hide();	
			$("#search_multi_info").show();
		}
		else{
			$("#search_info").show();			
			$("#search_multi_info").hide();
		}
	}
	
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

})