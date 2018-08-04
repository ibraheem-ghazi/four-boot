$.fn.fourBoot.default.dict.test={
	selectAll:'Test 1',
	deselectAll:'Test 2',
	nothingSelected:'Test 3',
	search:'Test 4',
	noSearchResult:'Test 5 "%%"', //"%%" will be replaced by search value
};
$(function(){
	
	$(document).on('click', '.sidebar-nav a[href="#/examples"]', function (event) {
		//work around for docsify when open Examples page attach FourBoot to select picker
		var timer = setInterval(function(){
			try{$('select.four-boot').fourBoot();}catch(e){clearInterval(timer);}
		},250);
		
	});
	$(document).on('click', '[data-adder-opt]', function (event) {
		event.preventDefault();
		var val = makeid();
		var $select = $(this).parent().parent().find('div.four-boot').find('select.four-boot');
		$select.append('<option value="'+val+'">'+val+'</option>');
		if($select.fourBoot('get','observerEnabled'))
			$select.fourBoot('val',val);
	});
	
	function makeid() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	  return text;
	}
		
});

