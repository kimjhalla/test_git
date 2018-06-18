$(document).ready(function (){
	
	//---------------------------
	// 다른 모달 활성화시 기존 활성화 모달은 비활성화 이벤트
	// datadropper은 자기 스크립트에 설정되어있음
	//---------------------------
	$(this).click(function(e) {
		var traveler_list = $(".traveler_list");		
		if(traveler_list.parent("div").has(e.target).length === 0 && traveler_list.has(e.target).length === 0) {
			traveler_list.hide();				
		}
	})
	
	var TravelerInfo = (function(){
		var instance;

		function initiate(){
			return {
				adultCount : 1, 
				childrenCount : 0, 
				grade : 1
			}
		}
		
		return{
			getInstance: function(){
				if(!instance){
					instance = initiate();
				}
				return instance;
			}
		}
	})();
	
	var travelerInfo = TravelerInfo.getInstance();
	
	//---------------------------
	// 승객 등급 변경 이벤트 
	//---------------------------
	$(".traveler_grade .grade").click(function(){		
		$(this).parent("ul").find("span").css("border-color","#bcbcbc");
		$(this).find("span").css("border-color","#ff0000");
	})
	
	//---------------------------
	// 승객 인원 변경 이벤트 
	//---------------------------	
	$(".button").click(function(){
		var adultCount = 1;
		var childrenCount = 0;
		if($(this).hasClass("minus") === true){			
			if($(this).parent("div").hasClass("adult")){
				adultCount = Number($(this).parent("div").find("span").text());
				if(adultCount <= 1){
					return;
				}
				adultCount += -1;
				$(this).parent("div").find("span").text(adultCount);
			}else if($(this).parent("div").hasClass("children")){
				childrenCount = Number($(this).parent("div").find("span").text());
				if(childrenCount == 0){
					return;
				}
				childrenCount += -1;
				$(this).parent("div").find("span").text(childrenCount);
			}
		} 
		else if($(this).hasClass("plus") === true){
			if($(this).parent("div").hasClass("adult")){
				adultCount = Number($(this).parent("div").find("span").text());
				if(adultCount >=5 ){
					return;
				}
				adultCount += 1;
				$(this).parent("div").find("span").text(adultCount);
			}else if($(this).parent("div").hasClass("children")){
				childrenCount = Number($(this).parent("div").find("span").text());
				if(childrenCount >=5 ){
					return;
				}
				childrenCount += 1;
				$(this).parent("div").find("span").text(childrenCount);
			}
		}
		
		travelerInfo.adultCount = adultCount;
		travelerInfo.childrenCount = childrenCount;
		setTravelerInfo();
		
	})
	
	//---------------------------
	// 승객 정보 input 글자 설정
	//---------------------------	
	function setTravelerInfo(){
		var str = '성인 : '+travelerInfo.adultCount+' , 유/소아 : '+travelerInfo.childrenCount+' , 등급 : '+travelerInfo.grade;
		$(".input_traveler").find("input").val(str);
	}
	
	//---------------------------
	// 승객 정보 입력 화면
	//---------------------------
	$(".input_traveler input").click(function(){		
		$(this).parent("div").find(".traveler_list").show();	
		
	})
	
	//---------------------------
	// 날짜 검색 UI(DateDropper)
	//---------------------------
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
	
	//---------------------------
	// 검색 유형(왕복, 편도, 다구간)
	//---------------------------
	$(".search_type li").click(function(){
		$(this).parent("ul").find("a").removeClass("active");	/* active 클래스 삭제 */
		$(this).parent("ul").find("a").css("color","black");	/* 글자 색 검은색 설정 */
		$(this).find("a").addClass("active");					/* 클릭한 a 태그 active 클래스 추가 */
		$(this).find("a").css("color","red");					/* 클릭한 a 태크 빨간색 설정 */		
		
		// 검색 유형 클릭시 이벤트 발생
		clickSearchType($(this).find("a"));
		
	})
	
	//---------------------------	
	// 검색 유형 클릭시 이벤트 발생
	//---------------------------	
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
	
	//---------------------------
	//ajax 를 통한 로그인 프로세스 진행
	//---------------------------	
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
	//---------------------------
	// ajax 실행 결과 후처리
	//---------------------------
	function callbacklogin(obj) {
		if (obj.resultCode != null || length(obj.resultCode) > 0) {
			alert(obj.resultCode);
		} else {
			alert('성공');
			// 로그인 화면으로 전환
		}
	}
	
	//---------------------------
	// 가입 버튼 클릭시 처리
	//---------------------------
	function join(){
		
	}

})