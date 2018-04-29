$(function(){
	$('select.four-boot').fourBoot();
	$('[data-adder] div.four-boot').parent().append('<button data-adder-opt  class="btn fix-mt btn-outline-dark btn-xs ml-3 float-right">add option</button>');
	
	
	$(document).on('click', '[data-adder-opt]', function (event) {
		event.preventDefault();
		console.log($(this).parent().find('div.four-boot').find('select.four-boot'))
		$(this).parent().find('div.four-boot').find('select.four-boot').append('<option value="'+makeid()+'">'+makeid()+'</option>');
		
	});
	
	function makeid() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	  return text;
	}
		
});

