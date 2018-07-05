/************************** 함수 **************************/

//---------------------------
// 검색 버튼 클릭 처리
//---------------------------
function search(){	
	// 여행 유형
	var searchTypeTag = $('.trip_type').find('ul').find('li').find('.active');	
	console.log('여행 유형 : '+searchTypeTag.prop('rel'));
	
	var searchData;
	
	// 다구간일 경우
	if(searchTypeTag.prop('rel') === 'multi'){
		searchData = $('#search_multi_info');
	}
	// 단일 구간일 경우	
	else{
		searchData = $('#search_info');
	}
	
	
	//----------------------------
	// 왕복일 경우에만 출발/도착 일자가 존재
	// 편도 다구간은 출발 일자만 존재
	//----------------------------
	var departureCityTag = searchData.find('.input_city.departure').find(':input:not(:hidden)');
	var destinationCityTag = searchData.find('.input_city.destination').find(':input:not(:hidden)');
	
	if(departureCityTag.val().length <= 0){
		console.log('출발 도시 입력 필요');
		return false;	
	}
		
	
	if(false && destinationCityTag.val().length <= 0){
		return false;
	}
	
	console.log('출발도시 : '+departureCityTag.val() +"\t 도시 코드 : "+departureCityTag.data('iataCode'))
	console.log('도착도시 : '+destinationCityTag.val() +"\t 도시 코드 : "+destinationCityTag.data('iataCode'))
	
	//----------------------------
	// 왕복일 경우에만 출발/도착 일자가 존재
	// 편도 다구간은 출발 일자만 존재
	//----------------------------	
	var startDateTag = $('.input_cal.start').find(':input:not(:hidden)');
	var endDateTag = $('.input_cal.end').find(':input:not(:hidden)');
	
	console.log('출발도시 일자 : '+startDateTag.val()+'\t 도착도시 일자 : '+endDateTag.val());
}


/**
 * ajax 를 통한 로그인 프로세스 진행
 * url : 전송 URL
 * param : 전송 데이터(JSON)
 * callback : 전송 결과 처리함수 
 */
function AJAX(url,param,callback) {
	jQuery.ajax({
		type : "POST",
		url : url,
		data : param,
		datatype : "JSON",
		contenttype : "application/json;",
		success : function(obj) {
			callback(obj);
		},
		error : function(xhr, status, error) {
			console.log(xhr);
		}
	})
}