"use strict";

function pushSign(numberOrSign) {
  const askForZero = document.getElementById("display_area").innerHTML;
  if (askForZero == 0) {
    document.getElementById("display_area").innerHTML = "";
  }

  document.getElementById("ac_switch").innerHTML = "C";
  document.getElementById("display_area").innerHTML += numberOrSign;
}


function calcDisplay() {
  const displaySigns = document.getElementById("display_area");
  const result = eval(displaySigns.innerHTML);
  displaySigns.innerHTML = result;
}

function resetDisplay() {
  document.getElementById("display_area").innerHTML = "0";
  document.getElementById("ac_switch").innerHTML = "AC";
}
