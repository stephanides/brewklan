if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)){
  
}
else{

}
function section(e){
  $('html, body').animate({scrollTop:$(`#section-${e}`).position().top}, 'slow');
}
function sectionMobile(e){
  document.getElementById("menuMobile").style.top = "-200vh";
  document.getElementById("closeMenuMobileIcon").style.display = "none";
  document.getElementById("menuMobileIcon").style.display = "block";
  $('html, body').animate({scrollTop:$(`#section-${e}`).position().top - $('.header').outerHeight()}, 'slow');

}
function showMenuMobile(){
  document.getElementById("menuMobile").style.top = "0px";
  document.getElementById("closeMenuMobileIcon").style.display = "block";
  document.getElementById("menuMobileIcon").style.display = "none";
}
function hideMenuMobile(){
  document.getElementById("menuMobile").style.top = "-200vh";
  document.getElementById("closeMenuMobileIcon").style.display = "none";
  document.getElementById("menuMobileIcon").style.display = "block";
}
