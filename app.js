$(document).ready(function(){
	var i = 0;
	var tab = ["salut","yola","Ez bro", "learn to play noob", "learn to code","foo"];
	$('img').click(function(){
		$("#lol").text(++i); 
		if ( i % 20 === 0){
			var randomMessage = tab[Math.floor(Math.random()*tab.length)];
			alert(randomMessage);
		}
	});
});
