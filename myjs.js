function toKmph(value){
	return (value * 18/5);
}
function toMps(value){
	return (value * 5/18);
}

$(document).ready(function(){

	$("#mps").blur(function(){
		
		var value = $(this).val();
		if(value == ''){
			value=0;
		}
		value = toKmph(value);
		$("#kmph").val(value.toFixed(2));
			
	});

	$("#kmph").blur(function(){

		var value = $(this).val();
		if(value == ''){
			value=0;
		}
		else{
			var output = toMps(value);
			$("#mps").val(output.toFixed(2));
		};

	});

});