let user_name="";
let password="";
function saftyProtokoll()
{
  let saftyStrike = 0;
  if(user_name != null && getPassword() === false){saftyStrike++}
  if(saftyStrike >= 5){location.reload()}
}
function getUSerName()
{
  document.querySelector('Anmelden')= function checkusername()
  {
    var user_name = document.getElementById('user_name-login')
    if(user_name = document.user_name){return true}
    else
    {
      alert("Benutzer nicht vorhanden");
      return false;
    }
  }
}
function getPassword()
{
  document.querySelector('Anmelden') = function getPassword(){
    var password = document.getElementById('password')
    if(password = document.password){return true}
    else
    {
      alert("Benutzer nicht vorhanden")
      return false
    }
  }
}

function AskForPermissionForCookies(allowCookies = false)
{
    const storageType = localStorage;
    const constantPropertyName = "cookieContent";
    const showPopUp = () => !storageType.getItem(constantPropertyName);
    const saveToStorage = () => storageType.setItem(constantPropertyName, true);
    window.onload = () => 
    {
        const consent = confirm("Cookies zustimmen?");
        if(consent=true)
        {
          saveToStorage();
          saveLoginData();
        }//https://www.youtube.com/watch?v=-HgdzYCi2nI&t=207s
    }
}
function createCookies()
{
    var benutzernamecookie = document.getElementById("user_name-login").ariaValueText;
    var passwordcookie = document.getElementById("password").ariaValueText;
    document.cookie = benutzernamecookie;
    document.cookie = passwordcookie;
}
function saveLoginData()
{
  if(consent = true)
  {
    if(SaveDataTrue != null)
    var SaveDataTrue = document.getElementById("checkboxpermalogin");
    createCookies();
  }
}
function showCheckBox()
{
  let checkboxpermalogin;
  showCheckboxbn = document.getElementById("user_name-login").ariaValueText;
  showCheckboxps = document.getElementById("password").ariaValueText;
  while(showCheckboxbn != null)
  {
    while(showCheckboxps != null)
    {
      var checkboxpermaloginvisible = document.getElementById("permalogincheckboxp");
      checkboxpermaloginvisible.style.setProperty("visibility", "hidden","false");
      var registerbuttoninvisible = document.getElementById("Registrieren-Button");
      registerbuttoninvisible.style.setProperty("visibility", "hidden", "false");
    }
  }
  while(showCheckboxbn = null)
  {
    while(showCheckboxps = null)
    {// Nachprüfen(nicht fertig)
      var checkboxpermaloginvisible = document.getElementById("permalogincheckboxp");
      checkboxpermaloginvisible.style.setProperty(visibility, hidden, tru);
      var registerbuttoninvisible = document.styleSheets[Anmeldung.css].cssRules[Login-Button].style;//Ka ob das funktionier
      registerbuttoninvisible.style.setProperty(visibility, hidden, true);
    }
  }
// funktioniert nicht
}