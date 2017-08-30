var imgs = ["img/woodcutter.jpg","img/woodcutter.jpg","img/woodcutter.jpg","img/woodcutter.jpg"];
var text = ['<a href="#"><img src="img/ring.png" alt="firt-page" onclick="chgImg(1)"></a><a href="#"><img src="img/circle.png" alt="second-page" onclick="chgImg(2)"></a><a href="#"><img src="img/circle.png" alt="third-page" onclick="chgImg(3)"></a><a href="#"><img src="img/circle.png" alt="four-page" onclick="chgImg(4)"></a>',
		'<a href="#"><img src="img/circle.png" alt="firt-page" onclick="chgImg(1)"></a><a href="#"><img src="img/ring.png" alt="second-page" onclick="chgImg(2)"></a><a href="#"><img src="img/circle.png" alt="third-page" onclick="chgImg(3)"></a><a href="#"><img src="img/circle.png" alt="four-page" onclick="chgImg(4)"></a>',
		'<a href="#"><img src="img/circle.png" alt="firt-page" onclick="chgImg(1)"></a><a href="#"><img src="img/circle.png" alt="second-page" onclick="chgImg(2)"></a><a href="#"><img src="img/ring.png" alt="third-page" onclick="chgImg(3)"></a><a href="#"><img src="img/circle.png" alt="four-page" onclick="chgImg(4)"></a>',
		'<a href="#"><img src="img/circle.png" alt="firt-page" onclick="chgImg(1)"></a><a href="#"><img src="img/circle.png" alt="second-page" onclick="chgImg(2)"></a><a href="#"><img src="img/circle.png" alt="third-page" onclick="chgImg(3)"></a><a href="#"><img src="img/ring.png" alt="four-page" onclick="chgImg(4)"></a>'];
var n=0;
var time=300;
var play=setInterval("chgImg(0)", 8000);

function chgImg(number) {
	if (number!=0) n=number-2;
	$('.background-picture').fadeOut(time, function() {
		$(this).css({'background-image':'url('+imgs[n]+')'}).fadeIn(time);
		});

	$('.pagination').fadeOut(time, function() {
		$(this).html(text[n]).fadeIn(time);
		});

	n++;
	if (n>=imgs.length) n=0;
}