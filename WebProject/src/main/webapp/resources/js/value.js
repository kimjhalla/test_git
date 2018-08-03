var TravelerInfo = (function(){
	var instance;
	function initiate(){
		return {
			adultCount : 1, 
			childrenCount : 0, 
			grade : '이코노미',
			gradeCode : 1			
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
