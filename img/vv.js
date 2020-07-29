function vix() {
var nn=document.getElementById("name").value;
var kk=document.getElementById("texts").value;
if (kk=="") {
alert("please enter some message");
}
else{
alert("thank you for your response"+ nn +"\n we'll get in touch");
}
}

$(function(){
$('#navbar a[href*=\\#]:not([href=\\#])').on('click',function(){
var target = $(this.hash);
target=target.length ? target:$('[name='+this.hash.substr(1)+']');
if(target.length){
$('html,body').animate({
scrollTop:target.offset().top
},10000);
return false;
}
});
});