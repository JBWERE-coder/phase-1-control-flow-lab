// function scuberGreetingForFeet(){
//   // Write your code here!
//   if (scuberGreetingForFeet <= 400) {
//     scuberGreetingForFeet = 'This one is on me!'
//   } else if (scuberGreetingForFeet > 2000 ) {
//       scuberGreetingForFeet = 'I will gladly take your thirty bucks.'
//   } else if(scuberGreetingForFeet > 2500){
//     scuberGreetingForFeet = "No can do."
//   } 
//     return scuberGreetingForFeet;
//   }

function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    scuberGreetingForFeet = 'This one is on me!'
  } else if (feet > 2000 && feet < 2500 ) {
      scuberGreetingForFeet = 'I will gladly take your thirty bucks.'
  } else if(feet > 2500){
    scuberGreetingForFeet = "No can do."
  } 
    return scuberGreetingForFeet;
  }


function ternaryCheckCity(city){
  // Write your code here!
  if(city == "NYC"){
    ternaryCheckCity = "Ok, sounds good.";
  } else {
    ternaryCheckCity = "No go.";
  }
  return ternaryCheckCity;
}

function switchOnCharmFromTip(tip){
   switch(tip){
    case "generous":
      switchOnCharmFromTip = 'Thank you so much.';
      break;
    case "not as generous":
      switchOnCharmFromTip = 'Thank you.';
      break;
      default:
        switchOnCharmFromTip = "Bye."
   }
   return switchOnCharmFromTip;
}