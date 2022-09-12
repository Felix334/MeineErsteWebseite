const { writeFile } = require('fs');
const { type } = require('os');
const { format } = require('path');

function createNewPassword()
{
    create_New_User = false;
   if(create_New_User = true)
   {
    function generatePassword()
    {
      function generateNewPassword(passwordLenght)
      {
        var numberChars = "0123456789";
        var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var loweChars = "abcdefghijklmnopqrstuvwxyz";
        var allChars = numberChars + upperChars + loweChars;
        var randomPasswordArray = Array(passwordLenght);
        randomPasswordArray[0] = numberChars;
        randomPasswordArray[1] = upperChars;
        randomPasswordArray[2] = loweChars;
        randomPasswordArray = randomPasswordArray.fill(allChars, 3);
        return shuffelArray(randomPasswordArray.map(function(x){return x[Math.floor(Math.random() * x.length)] })).join('');
      }
      function shuffelArray(array)
      {
              for(var i = array.length -1; i > 0; i--)
              {
                  var j = Math.floor(Math.random() * (i + 1));
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
              return array;
          }
          alert(generateNewPassword(12));
      }
    }
}
function getEingabe()
const Eingabe = new Eingabe;
let vor_namereg = document.getElementById("Registrieren").onclick =document.getElementById("VornameReg").innerHTML;
let nach_namereg = document.getElementById("Registrieren").onclick = document.getElementById("NachnameReg").innerHTML;
let email_reg = document.getElementById("Registrierung").onclick = document.getElementById("EmailReg").innerHTML;
let benutzername_reg = document.getElementById("Registrierung").onclick = document.getElementById("BenutzernameReg").innerHTML;
let password_reg = document.getElementById("Registrierung").onclick = document.getElementById("PasswordReg").innerHTML;
let password_reg_confirm = document.getElementById("Registrierung").onclick = document.getElementById("Password-Reg-Confirm").innerHTML;
checkEntry();
function eingabeRegister()
{
    let password_reg_confirm;
    document.getElementById("Password-Reg-Confirm").innerHTML = password_reg_confirm;
    {
        document.getElementById("Password-Reg-Confirm").innerHTML = password_reg_confirm;
        checkEntry();
    }
    let new_password
    {
       new_password = getElementById(shuffelArray).ariaValueText;
       console.log(new_password);
    }
    }
    function wrongEntry()
    {
        document.getElementById("Status-Reg-Entry").ariaValueText; // Nicht fertig
    }
    function checkEntryValid()
    {
        if(benutzername_reg.length < 4)
        {
            alert("Benutzername ist zu kurz");
            wrongEntry();
            bn_reg_valid = false;
            if(benutzername_reg.length > 25)
            {
                alert("Benutzername ist zu lang");
                wrongEntry();
                return bn_reg_valid = false
            }
            else{return bn_reg_valid = true;}
        }
        else{bn_reg_valid = false;}
        if(vor_namereg.length <3)
        {
            vn_reg_valid = false;
            alert("Vorname ist zu kurz");
            wrongEntry();
        }
        if(nach_namereg.length <2)
        {
            nn_reg_valid = false;
            alert("Nachname ist zu kurz");
            wrongEntry();
        }
        if(password_reg.length < 6)
        {
            if(password_reg.length >25)
            {
                alert("Passwort ist zu kurz");
                wrongEntry();
                return ps_reg_valid = false;
            }
        }
        else{return ps_reg_valid = true;}
        if(password_reg = password_reg_confirm)
        {
            console.log("Passwörter stimmen überein");
            return ps_reg_valid_confirm = true;
        }
        else{alert("Passwörter stimmen nicht überein");}

        function checkEmailValid()
        {
            let checkForSpace = email_reg.indexOf('');
            if(checkForSpace != null){checkEmailValidConfirm1 = true;}
            let checkForATChar = email_reg.indexOf("@");
            if(checkForATChar != null){checkEmailValidConfirm2 = true;}
            let checkForDotChar = email_reg.indexOf(".");
            if(checkForDotChar != null){checkEmailValidConfirm3 = true;}
            if(checkEmailValidConfirm1 = true)
            {
                if(checkEmailValidConfirm2 = true){if(checkEmailValidConfirm3 = true){return EmailValid = true;}}   
            }
        }

        function checkEntryvalidConfirm()
        {
            confirmEntry = false;
            checkEntryValid();
            checkEmailValid();
            if(bn_reg_valid = true)
            {
                if(ps_reg_valid = true)
                {
                   if(ps_reg_valid_confirm = true)
                   {
                       if(EmailValid = true)
                       {
                           return confirmEntry = true;
                       }else{alert("Bitte fülle alle Felder richtig aus")}
                   }else{alert("Bitte fülle alle Felder richtig aus")}
                }else{alert("Bitte fülle alle Felder richtig aus")}
            }else{alert("Bitte fülle alle Felder richtig aus")}
        }
    }


function Anmelden()
    {
        function getUserData()
        {
            let userkey;
            let serverkey;
            let userdatapassword;
            let userdataUsername;
        }
        document.getElementById("Reg-Button") = function checkEntryWithButton()
        {
            if(checkEntryvalidConfirm.confirmEntry = true)
            {
               if(IsConnected = true)
               {
                var newUserDokument = document.createElement("form").ariaValueNow;
                createUserRegisterForm();
               }
               else
               {
                alert("Verbindung zum Server fehlgeschlagen, bitte erneut verbinden");
            }
            }
        }
    }
function checkConnectionToServer(IsConnected = false)
{
    const navigator = new Navigator();
    while(navigator.onLine = true){return IsConnected = true;}
}
    document.getElementById("changeStatusButton").onclick = function changeStatusButton()
    {
    var Content = document.getElementById("Status-Reg-Entry");
    var Text = Geschafft;
    var wrongEntry = FalscheEingabe;
    }
function convertDataToHash()
{
    const Data = new Map();

    Data.set(Test1, 33389);
    Data.set(Test2, 33389);
    console.log(Data.get(Test1));
    console.log(Data.size);
    return Data;
}
function createUSerId()
{
    const { v4: uuidv4 } = require('uuid');
    uuidv4(newUuid);
    console.log(newUuid);
    return newUuid;
}
function createUserRegisterForm() // Testen(Unfertig)
{
    createUSerId();
    var userData = document.createElement("userData");
    userData.setAttribute("vorname", vor_namereg);
    userData.setAttribute("Nachname", nach_namereg);
    userData.setAttribute("email", email_reg);
    userData.setAttribute("username", benutzername_reg);
    userData.setAttribute("password", password_reg);
    userData.setAttribute("UserHas", Data);
    userData.setAttribute("UserId", newUuid);
    var FormInfoData = document.getElementById('userData');
    if(checkConnectionToServer.IsConnected=true)
    {
        if(checkEntryValid.confirmEntry == true){sendFormData = new FormData(FormInfoData);}
    } //????
}
function createNewUser()
{
    createUSerId();
    const NewUser = new User();
    NewUser.Vorname = eingabeRegister.vor_namereg;
    NewUser.Nachname = createUserRegisterForm.nach_namereg;
    NewUser.Email = createUserRegisterForm.email_reg;
    NewUser.username = createUserRegisterForm.benutzername_reg;
    NewUser.password_reg = createUserRegisterForm.password_reg;
    NewUser.UserId = createUserRegisterForm.newUuid;
    NewUser = new FormData();
    return NewUser;
}
function sendToJSON()
{
    var NewUser = {
        vorname: createNewUser.NewUser.vor_namereg,
        nachname: createNewUser.NewUser.nach_namereg,
        email: createNewUser.NewUser.email_reg,
        username: createNewUser.NewUser.username,
        password: createNewUser.NewUser.password,
        userid: createNewUser.NewUser.UserId
    };
    var UserDatajson = JSON.stringify(NewUser);
    
    console.log(UserDatajson);
}
sendToJSON();
function showTestData() // Löschen??
{
    for(let i = 0; i < NewUserArray.length; i++)
    {
        console.log(createNewUser.NewUser);
    }
}
if(document.getElementById("Reg-Button"))
{
    createNewUserTest();
}
showTestData();
checkEntryvalidConfirm();

