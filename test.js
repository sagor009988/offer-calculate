const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
//   step 1 display objects
let text=''
for(let x in person){
    text+= person[x]
}

  document.getElementById("demo").innerHTML = text;