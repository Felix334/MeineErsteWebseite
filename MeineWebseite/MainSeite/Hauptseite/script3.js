function AcceptLine1Section1(SubmitEvent){var SubmitEvent}
function AcceptLine1Section2(){var SubmitEvent}
function AcceptLine1Section3(){var SubmitEvent}
function AcceptLine1Section4(){var SubmitEvent}
function AcceptLine2Section1(){var SubmitEvent}
function AcceptLine2Section2(){var SubmitEvent}
function AcceptLine2Section3(){var SubmitEvent}
function AcceptLine2Section4(){var SubmitEvent}
function AcceptLine3Section1(){var SubmitEvent}
function AcceptLine3Section2(){var SubmitEvent}
function AcceptLine3Section3(){var SubmitEvent}
function AcceptLine3Section4(){var SubmitEvent}

function logSubmit(event) 
{
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}
  
  const form = document.getElementById('form'); //Nachprüfen ob '' statt ""
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

function ladeNeueOptionen()
{
document.getElementById("option1") = function chooseTechnik(){location.reload(forcedReload);}
document.getElementById("option2") = function chooseLebensmittel(){location.reload(forcedReload);}
document.getElementById("option3") = function chooseVersicherung(){location.reload(forcedReload);}
document.getElementById("option4") = function chooseBankenUndFinanzen(){location.reload(forcedReload);}
document.getElementById("option5") = function chooseFilmeUndSerien(){location.reload(forcedReload);}
document.getElementById("option6") = function chooseBauUndWerkstoffe(){location.reload(forcedReload);}
document.getElementById("option7") = function chooseComputerTechnik(){location.reload(forcedReload);}
document.getElementById("option8") = function chooseNeusteSpiele(){location.reload(forcedReload);}
document.getElementById("option9") = function chooseKleidungchooseKonsolen(){location.reload(forcedReload);}
document.getElementById("option10") = function chooseKleidung(){location.reload(forcedReload);}
}
function displayDatatInSearchBar()
{
  const userCardTemplate = document.querySelector("[data-user-template]")
}
function chooseTechnik(){location.reload(forcedReload);}