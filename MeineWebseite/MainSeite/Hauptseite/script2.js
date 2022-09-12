function neuRegistriert()
{
    neuregistriert
    if(neuregistriert = true)
    {
        function Cookies()
        {
        if(window.alert(navigator.cookieEnabled)){document.cookie = "allowDataSave = true";}
        }
    }
}
function MeineAuswahl(){}
function ÖffneSupport(){}
function ÖffneFAQ(){}
function ÖffneBugsMelden(){}
function LadeSeiteNeu(){} 
zustimmung = false;
if(zustimmung = true)//Später ein Menu hinzufügen in dem man verschiedene Bedingungen wie "Newsletter zustellen" oder so
{
    if(ausgewählt[1, 1] = true){}
    if(ausgewählt[2, 1] = true){}
    if(ausgewählt[3, 1] = true){}
    if(ausgewählt[4, 1] = true){}
    if(ausgewählt[1, 2] = true){}
    if(ausgewählt[2, 2] = true){}
    if(ausgewählt[3, 2] = true){}
    if(ausgewählt[4, 2] = true){}
    if(ausgewählt[1, 3] = true){}
    if(ausgewählt[2, 3] = true){}
    if(ausgewählt[3, 3] = true){}
    if(ausgewählt[4, 3] = true){}
}
function ZufälligeAuswahl()
{
    var add1_1 = document.requestStorageAccess();
    var add2_1 = document.requestStorageAccess();
    var add3_1 = document.requestStorageAccess();
    var add4_1 = document.requestStorageAccess();
    var add1_2 = document.requestStorageAccess();
    var add2_2 = document.requestStorageAccess();
    var add3_2 = document.requestStorageAccess();
    var add4_2 = document.requestStorageAccess();
    var add1_3 = document.requestStorageAccess();
    var add2_3 = document.requestStorageAccess();
    var add3_3 = document.requestStorageAccess();
    var add4_3 = document.requestStorageAccess();
    behebeLadeProbleme();
}
function behebeLadeProbleme()
{
    let errorInLine1 = false;
    let errorInLine2 = false;
    let errorInLine3 = false;

    if(add1_1 == null)
    {
        var add1_1 = document.requestStorageAccess();
        if(add1_1 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine1 = true;
        }
    }
    if(add2_1 = null)
    {
        var add2_1 = document.requestStorageAccess();
        if(add2_1 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine1 = true;
        }
    }
    if(add3_1 = null)
    {
        var add3_1 = document.requestStorageAccess();
        if(add3_1 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine1 = true;
        }
    }
    if(add4_1 = null)
    {
        var add4_1 = document.requestStorageAccess();
        if(add4_1 == null){return errorInLine1 = true;}
    }
    if(add1_2 = null)
    {
        var add1_2 = document.requestStorageAccess();
        if(add1_2 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine2 = 2;
        }
    }
    if(add2_2 = null)
    {
        var add2_2 = document.requestStorageAccess();
        if(add2_2 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine2 = true;
        }
    }
    if(add3_2 = null)
    {
        var add3_2 = document.requestStorageAccess();
        if(add3_2 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine2 = true;
        }
    }
    if(add4_2 = null)
    {
        var add4_2 = document.requestStorageAccess();
        if(add4_2 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine2 = true;
        }
    }
    if(add1_3 = null)
    {
        var add1_3 = document.requestStorageAccess();
        if(add1_3 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine3 = true;
        }
    }
    if(add2_3 = null)
    {
        var add2_3 = document.requestStorageAccess();
        if(add2_3 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine3 = true;
        }
    }
    if(add3_3 = null)
    {
        var add3_3 = document.requestStorageAccess();
        if(add3_3 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine3 = true;
        }
    }
    if(add4_3 = null)
    {
        var add4_3 = document.requestStorageAccess();
        if(add4_3 == null)
        {
            document.getElementById("line1-section1-card").style.backgroundColor="red";
            return errorInLine3 = true;
        }
    }   
}
function FehlerBeimLaden()
{
    if(behebeLadeProbleme.errorInLine1 = true){location.reload();}
    if(behebeLadeProbleme.errorInLine2 = true){location.reload();}
    if(behebeLadeProbleme.errorInLine3 = true){location.reload();}
}

function LadeZufälligeAuswahl()
{
    function ZufälligeAuswahl()
    {  
       var min = document.requestStorageAccess();
       var max = document.requestStorageAccess();
       function Zufallszahl(Zufallszahl_neu)
        {
           var Zufallszahl_neu = Number.random(min, max);
           return Zufallszahl_neu;
        }
    
    }   
}
function getSearchbarInput(Search_Bar_Input){var Search_Bar_Input = document.getElementById("Search-Bar-Main");}
function testeEingabe()
{
    var Eingabe = document.getElementById("Search-Bar-Main");
    console.log(Eingabe);
}
function clicks(clicks = 0){clicks+1;}

function getNavBarActions()
{
    if(document.getElementById("Mein-Profil-Button")){openMeinProfil();} //
    if(document.getElementById("Meine-Auswahl-Button")){openMeineAuswahl();}
    if(document.getElementById("Bugs-Melden-Main-Button")){openBugsMelden();}
    if(document.getElementById("Support-Main-Button")){openSupport();}
    if(document.getElementById("FAQ-Main-Button")){openFAQ();}
}

function choosMainKategories()
{
    if(document.getElementById("option1-Side-Option")){location.reload();}
    if(document.getElementById("option2-Side-Option")){}
    if(document.getElementById("option3-Side-Option")){}
    if(document.getElementById("option4-Side-Option")){}
    if(document.getElementById("option5-Side-Option")){}
    if(document.getElementById("option6-Side-Option")){}
    if(document.getElementById("option7-Side-Option")){}
    if(document.getElementById("option8-Side-Option")){}
    if(document.getElementById("option9-Side-Option")){}
    if(document.getElementById("option10-Side-Option")){}
    if(document.getElementById("option11-Side-Option")){}
    if(document.getElementById("option12-Side-Option")){}
}
function chooseKategoriesRow1()
{
    if(document.getElementById("option1-Line1-id")){}
    if(document.getElementById("option2-Line1-id")){}
    if(document.getElementById("option3-Line1-id")){}
    if(document.getElementById("option4-Line1-id")){}
    if(document.getElementById("option5-Line1-id")){}
    if(document.getElementById("option6-Line1-id")){}
    if(document.getElementById("option7-Line1-id")){}
    if(document.getElementById("option8-Line1-id")){}
    if(document.getElementById("option9-Line1-id")){}
    if(document.getElementById("option10-Line1-id")){}
    if(document.getElementById("option11-Line1-id")){}
    if(document.getElementById("option12-Line1-id")){}
}
function chooseKategoriesRow2()
{
    if(document.getElementById("option1-Line2-id")){}
    if(document.getElementById("option2-Line2-id")){}
    if(document.getElementById("option3-Line2-id")){}
    if(document.getElementById("option4-Line2-id")){}
    if(document.getElementById("option5-Line2-id")){}
    if(document.getElementById("option6-Line2-id")){}
    if(document.getElementById("option7-Line2-id")){}
    if(document.getElementById("option8-Line2-id")){}
    if(document.getElementById("option9-Line2-id")){}
    if(document.getElementById("option10-Line2-id")){}
    if(document.getElementById("option11-Line2-id")){}
    if(document.getElementById("option12-Line2-id")){}
}
function chooseKategoriesRow3()
{
    if(document.getElementById("option1-Line3-id")){}
    if(document.getElementById("option2-Line3-id")){}
    if(document.getElementById("option3-Line3-id")){}
    if(document.getElementById("option4-Line3-id")){}
    if(document.getElementById("option5-Line3-id")){}
    if(document.getElementById("option6-Line3-id")){}
    if(document.getElementById("option7-Line3-id")){}
    if(document.getElementById("option8-Line3-id")){}
    if(document.getElementById("option9-Line3-id")){}
    if(document.getElementById("option10-Line3-id")){}
    if(document.getElementById("option11-Line3-id")){}
    if(document.getElementById("option12-Line3-id")){}
}

function openMeinProfil(){window.open();} //Adressen und Größe des Fensters einfügen
function openMeineAuswahl(){window.open();}
function openSupport(){window.open();}
function openFAQ(){window.open();}
function openBugsMelden(){window.open();}
