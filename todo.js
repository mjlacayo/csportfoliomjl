var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var disp=document.getElementById("disp");
var coloring=document.getElementById("coloring")
var clearBtn=document.getElementById("clearBtn")
btn.addEventListener("click", function() {
  
clearBtn.addEventListener("click", function(){
  disp.innerHTML = ""
})

if (coloring.value === "green"){
  disp.innerHTML+="<div style='color:green'>"+inp.value+"</div>"
}

else if (coloring.value === "orange"){
  disp.innerHTML+="<div style='color:orange'>"+inp.value+"</div>"
}

else if (coloring.value === "pink"){
  disp.innerHTML+="<div style='color:pink'>"+inp.value+"</div>"
}

else if (coloring.value === "yellow"){
  disp.innerHTML+="<div style='color:yellow'>"+inp.value+"</div>"
}
})


disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})