$(document).ready(function(){ 
	$('#home1').css('display', 'block');
	$('#gamepre').css('display', 'none');
	$('#rule').css('display', 'none');
	$('#game1').css('display', 'none');

	$('#gotogame').click(function(){
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'block');
	});
	$('#gotorule').click(function(){
		$('#home1').css('display', 'none');
		$('#rule').css('display', 'block');
	});
	$('#next').click(function(){
		$('#game1').css('display', 'block');
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'none');
		$('#rule').css('display', 'none');
	});
	$('#goback').click(function(){
		$('#home1').css('display', 'block');
		$('#gamepre').css('display', 'none');
		$('#rule').css('display', 'none');
	});
	$('#goback1').click(function(){
		$('#home1').css('display', 'none');
		$('#gamepre').css('display', 'block');
		$('#rule').css('display', 'none');
		$('#game1').css('display', 'none');
	});
});
