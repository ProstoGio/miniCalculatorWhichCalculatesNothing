const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const buttond = document.getElementById("buttondel");
const buttoncl = document.getElementById("buttonc");
const inp = document.getElementById("inputbar");
let v = "";
button1.addEventListener("click", function(){
  v = inp.getAttribute("placeholder");
  v = v + "1";
  inp.setAttribute("placeholder", v);
});

button2.addEventListener("click", function(){
    v = inp.getAttribute("placeholder");
    v = v + "2";
    inp.setAttribute("placeholder", v);
});

button3.addEventListener("click", function(){
      v = inp.getAttribute("placeholder");
      v = v + "3";
      inp.setAttribute("placeholder", v);
});

buttoncl.addEventListener("click", function(){
      inp.setAttribute("placeholder", "");
});

buttond.addEventListener("click", function(){
  v=inp.getAttribute("placeholder");
  let v2="";
  for(let i = 0; i < v.length-1; i++){
    v2+=v[i];
  }
  inp.setAttribute("placeholder", v2);
});
