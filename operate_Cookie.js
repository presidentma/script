function setCookie(staradv,value,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = staradv + "=" + value + "; " + expires;
  return document.cookie
}

function getCookie(cookieName)
{
  var name = cookieName + "=";
  var allCookies = document.cookie.split(';');
  for(var i=0; i<allCookies.length; i++) 
  {
    var c = allCookies[i].trim();
    if (c.indexOf(name)===0) return c.substring(name.length,c.length);
  }
  return "";
}
function checkCookie(){
  var staradv = getCookie('staradv')
  if (staradv) {
    alert('staradv为true')
  }
}
console.log(document.cookie)