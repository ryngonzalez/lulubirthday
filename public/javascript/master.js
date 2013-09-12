var $ = function(selector) {
	if('string' != typeof selector) return selector;

    var element = document.getElementById(selector) ||
            		document.querySelectorAll(selector)[0] ||
            			document.getElementByTagName(selector);

    return element;
};



var nineteen = 
{
	1: "I felt you in my legs",
	2: "Before I even met you",
	8: "And when I laid beside you",
	9: "For the first time",
	10: "I told you",
	14: "I feel you in my heart,",
	16: "And I really know you",
	22: "Now we're saying",
	23: "Hello, hello, hello (in a week!)",
	28: "Now we're saying",
	29: "Hello, hello, hello (in a week!)",
	36: "You are nineteen!",
	42: "(Call me)",
	51: "I felt you in my life",
	52: "Before I ever thought to",
	57: "Feel the need to lay down",
	60: "Beside you",
	62: "And tell you",
	65: "I feel you in my heart,",
	66: "And I really know you",
	71: "And now we're saying",
	72: "Hello, hello, hello (in a week!)",
	78: "Now we're saying",
	80: "Hello, hello, hello (in a week!)",
	86: "You are nineteen!",
	93: "(call me)",
	100: "You are nineteen!",
	107: "(call me)",
	120: "Flew home,",
	122: "Back to where we met",
	123: "Stayed inside",
	125: "You are so happy",
	128: "Cooked up a plan,",
	129: "So good except",
	131: "You are not alone",
	133: "You're the best I have",
	136: "Love you",
	139: "You're the best",
	142: "Love you",
	146: "I am yours right",
	149: "I am yours right",
	152: "You are nineteen!",
	159: "(call me)",
	167: "You are nineteen!",
	175: "(call me)",
	180: ""
}

var changeText = function (element, text) {
	element.innerHTML = text;
};


document.addEventListener('DOMContentLoaded', function() {
	var lyrics = function (time, text) {
		var el = $(".lyrics");
		return {
			time: time,
			fn: function() { changeText(el, text); },
			duration: 1
		};
	}


	var song = Director(".song", document.audio);

	for (line in nineteen)
		song.at(lyrics(line, nineteen[line]))

	var paragraph = $('.final'),
		img = new Image();

	img.src = 'images/heart.jpg';
	console.log(paragraph);

	song.at(
		{
			time: 185,
			fn: function(){
					console.log("FUCKING WORK");
					changeText(paragraph, "I hope you're having a great Birthday :) I love you, and I want to make you happy. You're the best girlfriend, friend, and person I've ever met. You're my counterpart, happy part, lovely part. Happy Birthday, Tracy <3");
					paragraph.appendChild(img);
				}
		});

	$('.letter').classList.remove('hidden');

	$(".letter").addEventListener('click', function(e){
		e.preventDefault();
		$('.letter').classList.add('flipped');
	}, false);
	$('img.heart-button').addEventListener('click', function(e){
		e.preventDefault();
		$('.flap').classList.add('open');
		$('.text').classList.remove('hidden');
		$('.letter').classList.add('hidden');
		song.play();
	}, false);
}, false	);