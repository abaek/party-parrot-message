var parrotType = 'partyparrot';

$(document).ready(function(){
    $("form").on('submit', function (e) {

		$('#main').empty();

    	var radioValue = $("input[name='parrot']:checked").val();
		if(radioValue){
			parrotType = radioValue;
		}

    	var msg = $('#msg').val().toUpperCase();
    	for (var i = 0; i < msg.length; i++) {
    		drawLetter(msg[i], i);
    	}

    	e.preventDefault();
	});
});

function drawLetter(letter, index) {
	var sp = createSpan();
	if (letter == 'A') {
		sp.append(createParrot(0, 52.5));
		sp.append(createParrot(0, 87.5));
		sp.append(createParrot(25, 30));
		sp.append(createParrot(25, 110));
		sp.append(createParrot(50, 10));
		sp.append(createParrot(50, 130));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(75, 140));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(100, 140));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(125, 140));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(150, 140));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(175, 140));
		sp.append(createParrot(200, 0));
		sp.append(createParrot(200, 140));

		sp.append(createParrot(100, 35));
		sp.append(createParrot(100, 70));
		sp.append(createParrot(100, 105));
	} else if(letter == 'H') {
		sp.append(createParrot(0, 0));
		sp.append(createParrot(25, 0));
		sp.append(createParrot(50, 0));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(200, 0));

		sp.append(createParrot(0, 140));
		sp.append(createParrot(25, 140));
		sp.append(createParrot(50, 140));
		sp.append(createParrot(75, 140));
		sp.append(createParrot(100, 140));
		sp.append(createParrot(125, 140));
		sp.append(createParrot(150, 140));
		sp.append(createParrot(175, 140));
		sp.append(createParrot(200, 140));

		sp.append(createParrot(100, 35));
		sp.append(createParrot(100, 70));
		sp.append(createParrot(100, 105));
	} else if (letter == 'P') {
		sp.append(createParrot(0, 0));
		sp.append(createParrot(25, 0));
		sp.append(createParrot(50, 0));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(200, 0));

		sp.append(createParrot(0, 35));
		sp.append(createParrot(100, 35));
		sp.append(createParrot(0, 70));
		sp.append(createParrot(100, 70));
		sp.append(createParrot(10, 105));
		sp.append(createParrot(90, 105));
		sp.append(createParrot(37.5, 140));
		sp.append(createParrot(72.5, 140));
	} else if (letter == 'Y') {
		sp.append(createParrot(125, 70));
		sp.append(createParrot(150, 70));
		sp.append(createParrot(175, 70));
		sp.append(createParrot(200, 70));

		sp.append(createParrot(0, 0));
		sp.append(createParrot(0, 140));
		sp.append(createParrot(25, 13));
		sp.append(createParrot(25, 127));
		sp.append(createParrot(50, 27));
		sp.append(createParrot(50, 113));
		sp.append(createParrot(75, 40));
		sp.append(createParrot(75, 100));
		sp.append(createParrot(100, 52.5));
		sp.append(createParrot(100, 87.5));
	} else if (letter == 'B') {
		sp.append(createParrot(0, 0));
		sp.append(createParrot(25, 0));
		sp.append(createParrot(50, 0));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(200, 0));

		sp.append(createParrot(0, 35));
		sp.append(createParrot(100, 35));
		sp.append(createParrot(0, 70));
		sp.append(createParrot(100, 70));

		sp.append(createParrot(10, 105));
		sp.append(createParrot(82.5, 105));
		sp.append(createParrot(37.5, 140));
		sp.append(createParrot(72.5, 140));

		sp.append(createParrot(117.5, 105));
		sp.append(createParrot(190, 105));
		sp.append(createParrot(137.5, 140));
		sp.append(createParrot(172.5, 140));

		sp.append(createParrot(200, 35));
		sp.append(createParrot(200, 70));
	} else if (letter == 'I')  {
		sp.append(createParrot(0, 70));
		sp.append(createParrot(25, 70));
		sp.append(createParrot(50, 70));
		sp.append(createParrot(75, 70));
		sp.append(createParrot(100, 70));
		sp.append(createParrot(125, 70));
		sp.append(createParrot(150, 70));
		sp.append(createParrot(175, 70));
		sp.append(createParrot(200, 70));

		sp.append(createParrot(200, 0));
		sp.append(createParrot(200, 35));
		sp.append(createParrot(200, 105));
		sp.append(createParrot(200, 140));

		sp.append(createParrot(0, 0));
		sp.append(createParrot(0, 35));
		sp.append(createParrot(0, 105));
		sp.append(createParrot(0, 140));
	} else if (letter == 'T')  {
		sp.append(createParrot(0, 70));
		sp.append(createParrot(25, 70));
		sp.append(createParrot(50, 70));
		sp.append(createParrot(75, 70));
		sp.append(createParrot(100, 70));
		sp.append(createParrot(125, 70));
		sp.append(createParrot(150, 70));
		sp.append(createParrot(175, 70));
		sp.append(createParrot(200, 70));

		sp.append(createParrot(0, 0));
		sp.append(createParrot(0, 35));
		sp.append(createParrot(0, 105));
		sp.append(createParrot(0, 140));
	} else if (letter == 'R')  {
		sp.append(createParrot(0, 0));
		sp.append(createParrot(25, 0));
		sp.append(createParrot(50, 0));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(200, 0));

		sp.append(createParrot(0, 35));
		sp.append(createParrot(100, 35));
		sp.append(createParrot(0, 70));
		sp.append(createParrot(100, 70));

		sp.append(createParrot(10, 105));
		sp.append(createParrot(82.5, 105));
		sp.append(createParrot(37.5, 140));
		sp.append(createParrot(72.5, 140));

		sp.append(createParrot(117.5, 105));
		sp.append(createParrot(145, 140));
		sp.append(createParrot(172, 140));
		sp.append(createParrot(200, 140));
	} else if (letter == 'D')  {
		sp.append(createParrot(0, 0));
		sp.append(createParrot(25, 0));
		sp.append(createParrot(50, 0));
		sp.append(createParrot(75, 0));
		sp.append(createParrot(100, 0));
		sp.append(createParrot(125, 0));
		sp.append(createParrot(150, 0));
		sp.append(createParrot(175, 0));
		sp.append(createParrot(200, 0));

		sp.append(createParrot(0, 35));
		sp.append(createParrot(0, 70));

		sp.append(createParrot(10, 105));
		sp.append(createParrot(190, 105));

		sp.append(createParrot(25, 140));
		sp.append(createParrot(50, 140));
		sp.append(createParrot(75, 140));
		sp.append(createParrot(100, 140));
		sp.append(createParrot(125, 140));
		sp.append(createParrot(150, 140));
		sp.append(createParrot(175, 140));

		sp.append(createParrot(200, 35));
		sp.append(createParrot(200, 70));
	} else if (letter == ' ') {
		$('#main').append("<br>");
		return;
	}
	$('#main').append(sp);
}

function createSpan() {
	var sp = document.createElement("span");
	var style = 'position:relative;';
	style += 'display:inline-block;';
	style += 'height:225px;';
	style += 'width:175px;';
	style += 'padding:20px;';
	sp.style = style;
	return sp;
}

function createParrot(top, left) {
	var img = document.createElement("img");
	img.src = 'parrots/' + parrotType + '.gif';
	var style = 'position:absolute;';
	style += 'top:' + top + 'px;';
	style += 'left:' + left + 'px;';
	img.style = style;
	return img
}