function convertToC() {

	//on click, get user input
	var f = $('.userTemp').val();
	console.log(f);

 	//value of userTemp intput is string
 	//need to convert String to Int
	f = parseInt(f);

 	 //convert user input (F) to C
 	 //C = (f - 32) x (5/9)
 	var cTemp = (f - 32) * (5/9);

  	//display C result
  	console.log(cTemp);
  	$('.result').text(cTemp);
}

	$(function() {
  	// Handler for .ready() called.

  	$('.convert').click(convertToC);

});

	$(function() {
  	// Handler for .ready() called.

  	$('.convert').click(convertToC)

});

