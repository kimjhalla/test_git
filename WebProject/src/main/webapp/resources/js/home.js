var cityList= new Array();

$(document).ready(function (){
	
	$(".city_loc_list").click(function(){
		var tag = "";
		return tag;
	})
	
	//---------------------------
	// 도시 Input 자판 클릭 이벤트
	//---------------------------
	$(".city_loc").on('keyup click',function(){		
		var tag = "";
		var searchText = $(this).val();
		if($(this).val().length > 0){	
			
			// 입력 키를 조회 조건으로 검색 만듬
			$(this).parent().find("#city_loc_ul").html(function(){				
				var count = 0;
				
				var citySubList = cityList.filter(function(item){
					var k_name = item.KOREAN_NAME;
					var e_name = item.ENGLISH_NAME;
					
					return e_name.toLowerCase().match(searchText.toLowerCase());
				});
				for(var index in citySubList){		
					if(count > 10)
						break;
					
					tag += "<li class:'city_loc_data'; style='cursor:pointer'; data-eng-name='"+citySubList[index].ENGLISH_NAME+"' " +
							"data-kor-name='" +citySubList[index].KOREAN_NAME+"' " +
							"data-iata-code='" +citySubList[index].IATA_CODE+"' " +
							"data-icao-code='" +citySubList[index].ICAO_CODE+"' " +							
							">"+citySubList[index].KOREAN_NAME+"</li>";
					
					count++;				
				}				
				return tag;
			});
			
			$(this).parent().find(".city_loc_list").show();
			$(this).parent().find(".city_loc_list").find("li").css("border","1px solid #bcbcbc");			
			$(this).parent().find(".city_loc_list").find("li").on("click",function(){
				$(this).parent().parent().parent().find(".city_loc").val($(this).data("korName"));	
				$(this).parent().parent().parent().find(".modal").hide();
			});
		} 
		else{
			$("#city_loc_ul").html("");
			$(".city_loc_list").hide();
		}
	})
	
	function searchLangKo(searchText){
		var rCho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
		var rJung = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
		var rJong = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
		 
		var cho, jung, jong;		
		var nTmp=searchText.charCodeAt(0) - 0xAC00;
		jong=nTmp % 28; // 초성
		jung=( (nTmp-jong)/28 ) % 21; // 중성
		cho=( ( (nTmp-jong)/28 ) - jung ) / 21; // 종성
		 
		console.log(
		"초성:"+rCho[cho]+"\n"
		+"중성:"+rJung[jung]+"\n"
		+"종성:"+rJong[jong]
		);
	}
	
	//---------------------------
	// 도시 정보 init
	//---------------------------
	$.ajax({
		url:'/project/resources/csv/airport_code.csv',
		dateType:'text',		
	}).done(function(data){
		
		var list = data.split("\n");		
		var header = list[0].split(",");		
		for(var i = 1;i < list.length;i++){
			var tmp = {};
			for(var j = 0;j < header.length ; j++){				
				tmp[header[j].replace("\r","")] = list[i].split(",")[j];				
			}
			cityList.push(tmp);
		}
	});
	
	//---------------------------
	// 승객 수, 등급 입력 화면 init
	//---------------------------
	$(".traveler_list").html(function(){
		var tag = 
		"<div class='traveler_person'>" 
	+		"<ul>"
	+			"<li class='title'><span class='text'>인원</span></li>"
	+			"<li><span class='text'>성인</span><div class='adult count'><a class='button minus'></a><span class='number'>1</span><a class='button plus'></a></div></li>"
	+			"<li><span class='text'>유/소아</span><div class='children count'><a class='button minus'></a><span class='number'>0</span><a class='button plus'></a></div></li>"
	+		"</ul>"
	+	"</div>"
	+	"<div class='traveler_grade'>"
	+		"<ul>"
	+			"<li class='title'><span class='text'>등급</span></li>"
	+			"<li class='grade'><span id='economy'>이코노미</span></li>"
	+			"<li class='grade'><span id='bizness'>비즈니스</span></li>"								
	+		"</ul>"
	+	"</div>"
	
	return tag;
	})
	
	//---------------------------
	// 다른 모달 활성화시 기존 활성화 모달은 비활성화 이벤트
	// datadropper은 자기 스크립트에 설정되어있음
	//---------------------------
	$(this).click(function(e) {
		var traveler_list = $(".modal");		
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
				grade : '이코노미'
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
		travelerInfo.grade = $(this).find("span").text();
		setTravelerInfo();
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
		var str = '성인'+travelerInfo.adultCount+'명,유/소아'+travelerInfo.childrenCount+'명,등급:'+travelerInfo.grade;
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