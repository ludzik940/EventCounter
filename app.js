
var examDate = new Date("May 06, 2019 15:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = examDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("exams").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}, 1000);



addAnother = function() {

  
  let ul = document.getElementById("container");
  let liElem = document.createElement("li");
  
  let headElem = document.createElement("h2")
  let timeElem = document.createElement("p")
 

  let input;
  let dateEntered;

  input = document.getElementById('date').value;
  dateEntered = new Date(input);
  
  let title = document.getElementById('new-title').value;
  headElem.innerHTML = title;
  
  liElem.appendChild(headElem);
  liElem.appendChild(timeElem);

  let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = dateEntered - now;
    

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
 
    timeElem.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    

    window.localStorage.setItem(JSON.stringify(title), JSON.stringify(dateEntered));

	}, 10);
  
    
    ul.appendChild(liElem);


    


}

