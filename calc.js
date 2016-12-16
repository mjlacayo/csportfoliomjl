
// These are the different variables of the calculator//
var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var solve = document.getElementById("solve");
var display = document.getElementById("display");

//This line "listens" for when the solve button is clicked and which operation is selected//
solve.addEventListener("click", function(){
  var num1 = num1input.value;
  var num2 = num2input.value;
  
  
//This code is what makes all of the different operations work//
 if(selector.value === "+"){
    var answer = +num1 + +num2;
    display.innerHTML = answer;
  }
  else if(selector.value === "-"){
    var answe = num1 - num2; 
    display.innerHTML = answe;
  }
   else if(selector.value === "*"){
    var answ = num1 * num2; 
    display.innerHTML = answ;
  }
   else if(selector.value === "/"){
    var ans = num1 / num2; 
    display.innerHTML = ans;
  }
  else if(selector.value === "^"){
    var an = Math.pow(num1,num2);
    display.innerHTML = an;
  }
  else if(selector.value === "square root"){
    var a = Math.sqrt(num2);
    display.innerHTML = a;
  }
  
});