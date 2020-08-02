var imgs=document.getElementsByClassName("images");
var id=0;
window.setInterval(function(){
	for(let i=0;i<imgs.length;i++)
		imgs[i].style.display="none";
	imgs[id].style.display="block";
	id++;
	id%=imgs.length;
},2500);
