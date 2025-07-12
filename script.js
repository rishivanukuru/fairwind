// Get references to the elements you'll be working with
var input = document.getElementById("password");
var div = document.getElementById("HIDDENDIV");
var faildiv = document.getElementById("HIDDENFAIL");
var btn = document.getElementById("button");

// Set up event handlers in JavaScript
button.addEventListener("click", validate);

function validate(){
  if (input.value == 'CARDAMOM' || input.value == 'cardamom' || input.value == 'Cardamom') { 
     // No need to add a "show" class. Just remove the "hidden" class.
     div.classList.remove('hidden');
     if(!faildiv.classList.contains('hidden'))
     {
      faildiv.classList.add('hidden');
     }
     // Or, add it:
     // input.classList.add("hidden");
  } else {  
     //password.focus(); // <-- If you don't do this first, your select code won't work
     //password.setSelectionRange(0, password.value.length);   
     //alert('Spell failed! Do not attempt to impersonate Fairwind, or you will be cursed!'); 
     //div.classList.add('hidden');
     if(!div.classList.contains('hidden'))
     {
      div.classList.add('hidden');
     }
     faildiv.classList.remove('hidden');

  }
}