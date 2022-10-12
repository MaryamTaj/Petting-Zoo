console.log("script running!");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

console.log(button1);

button1.addEventListener("click", e => {
  //console.log("Button 1 pressed!");
  alert("Meh-eh-eh-eh!");
});

button2.addEventListener("click", e => {
  //console.log("Button 2 pressed!");
  const status2 = document.querySelector("#status2")
  status2.innerHTML = "Thanks for petting the bunny! He looks really happy!";
});

let carrots = 2;

button3.addEventListener("click", e => {
  carrots = carrots + 1;
  const status3 = document.querySelector("#status3");
  if (carrots <= 5){
    status3.innerHTML = "Coco has had " + carrots + " carrots today.";
  }
  else {
    status3.innerHTML = "Coco has had 5 carrots today.";
  }
});

button4.addEventListener("click", e => {
  //console.log("Button 4 pressed!");
  const page = document.querySelector("#pagecontent")
  page.innerHTML = "Due to some dangerous rulebreaking, the petting zoo is temporarily closed";
});
