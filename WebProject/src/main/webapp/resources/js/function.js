/**
 * 함수
 */

//---------------------------
// 검색 버튼 클릭시 처리
//---------------------------
function search(){
	alert($('.input_cal .start').find(':visible').find("input").val());
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