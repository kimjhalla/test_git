var cityList= new Array();

$(document).ready(function (){
	travelerInfo = TravelerInfo.getInstance()
	//---------------------------
	// 도시 Input 자판 클릭 이벤트
	//---------------------------
	$(".city_loc").on('keyup click',function(){
		var tag = "";
		var searchText = $(this).val();
		if($(this).val().length > 0){	
			// 기존 활성화 모달 비활성화
			$(".modal").hide();
			
			// 입력 키를 조회 조건으로 검색 만듬
			$(this).parent().find("#city_loc_ul").html(function(){				
				var count = 0;
				
				var citySubList = cityList.filter(function(item){
					var k_name = item.KOREAN_NAME;
					var e_name = item.ENGLISH_NAME;
					
					e_name = e_name.replace("International","");
					e_name = e_name.replace("Airport","");
					
					// 정규표현식 검색
					var reg = RegExp(searchText.toLowerCase(),"gi");
					return reg.test(e_name.toLowerCase());
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
				
				// 도시 데이터 클릭 이벤트				
				$(this).parent().parent().parent().find(".city_loc").val($(this).data("korName"));
				$(this).parent().parent().parent().find(".city_loc").data("iataCode",$(this).data("iataCode"));				
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
	+			"<li class='grade'><span id='economy' data-grade-code=1>이코노미</span></li>"
	+			"<li class='grade'><span id='bizness' data-grade-code=2>비즈니스</span></li>"								
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
	
	//---------------------------
	// 승객 등급 변경 이벤트 
	//---------------------------
	$(".traveler_grade .grade").click(function(){		
		$(this).parent("ul").find("span").css("border-color","#bcbcbc");
		$(this).find("span").css("border-color","#ff0000");
		travelerInfo.grade = $(this).find("span").text();
		travelerInfo.gradeCode = $(this).find("span").data('gradeCode');
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
	// ajax 를 통한 로그인 프로세스 진행
	//---------------------------
	$("#loginBtn").click(function(){
		param = 	{
				userId : $("#userId").val(),
				userPw : $("#userPw").val()
			}
		
		AJAX('login.do',param,callbacklogin)
	})

	//---------------------------
	//가입 버튼 클릭시 처리
	//---------------------------
	function join(){
		
	}


	// ---------------------------
	// 로그인 실행 결과 후처리
	// ---------------------------
	function callbacklogin(obj) {
		if (obj.resultCode != null || obj.resultCode.length > 0) {
			alert(obj.resultCode);
		} else {
			alert('성공');
			// 로그인 화면으로 전환
		}
	}
	
	//---------------------------
	// ajax 를 통한 검색 요청 프로세스
	//---------------------------
	$("#searchButton").click(function(){
		param = {
				adultCount : "",
				childrenCount : "",
				babyCount : "",
				flightType : $(".search_type").find("a[class='active']").attr('rel'),	
				gradeCode : "",
				flightParamList : new Array()
		}
		flightParam = {					
				depatureCity : "",
				destinationCity : "",
				depatureDate : "",
				destinationDate : ""	
			}
		// 다구간 여부 체크 travelerInfo
		if(param.flightType == "multi"){
			var idx = 0;
			$("#search_multi_info").find(".search_city").each(function(index,item){
				var depatureCity = $(item).find(".departure").find("input").val()
				var destinationCity = $(item).find(".destination").find("input").val()
				var depatureDate = $(item).find(".start").find("input").val()
				
				if(depatureCity.length != 0 && destinationCity.length != 0 && depatureDate.length != 0){					
					param.flightParamList.push({					
						depatureCity : depatureCity,
						destinationCity : destinationCity,
						depatureDate : depatureDate,
						destinationDate : ""	
					})
				}
			})
		}
		else{
			flightCity = $("#search_info").find(".search_city")
			flightDate = $("#search_info").find("#search_date")
			flightParam.depatureCity = flightCity.find(".departure").find("input").val()
			flightParam.destinationCity = flightCity.find(".destination").find("input").val()
			flightParam.depatureDate = flightDate.find(".start").find("input").val()
			flightParam.destinationDate = flightDate.find(".end").find("input").val()
			
			if(flightParam.depatureCity.length == 0 || flightParam.destinationCity.length == 0 || flightParam.depatureDate.length == 0 || (flightParam.flightType == "rount" && flightParam.destinationDate.length == 0)){
				alert('실패')
				return;
			}			
			param.flightParamList.push(flightParam)
		}
		
		if(param.flightParamList.size == 0){
			alert('실패')
			return;
		}
		param.adultCount = travelerInfo.adultCount;
		param.childrenCount = travelerInfo.childrenCount;
		param.babyCount = 0;
		param.gradeCode = travelerInfo.gradeCode;
		
		console.log(param)
		
		AJAX('searchRequest.do',param,callbackSearchRequest)
	})
	
	function callbackSearchRequest(obj){
		if (obj.resultCode != null && String(obj.resultCode).length > 0) {
			// 검색 요청 실패
			alert(obj.resultCode);
		} else {
			// 검색 요청 성공
			// 결과 받는 대로 처리하도록 설정
			alert('성공');
		}
	}
})
	
