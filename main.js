// var input1 = document.forms["0"]["0"].value;
// var input2 = document.forms["0"][1].value;
// only gives preexisting value, not the new value unless it gets reassigned


// function add (input1, input2) {
//   var input1 = Number(document.forms["0"]["0"].value);
//   var input2 = Number(document.forms["0"][1].value);
//   console.log(input1 + input2);
// }


var result = document.querySelector('#result');

function add (x, y) {
  var x = Number(document.querySelector('#one').value);
  var y = Number(document.querySelector('#two').value);
  result.textContent = (x + y);
}



// result.textContent = add();

// document.querySelector('cssSelector')

// - let's say <div class="fancy">
// - if you want to access that element in js
// `document.querySelector('.fancy')`
// now we can store it in a var
// `var fancy = document.querySelector('.fancy')`
