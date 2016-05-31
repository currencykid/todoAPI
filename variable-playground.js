var person = {
  name : "Andrew",
  age: 21 
}; 

function updatePerson(obj){
  // this won't work, this will assign new value but won't mutate it
  // when u call something on the original you are updating the original
  // when u assing a new value to argument you arent' updating the original 
  //obj = {
  //  name : "Andrew",
  //  age: 24
  //}; 
  obj.age= 24; 
}

updatePerson(person);
console.log(person); 

//Array example 

var grades = [15,37]; 

function addGrades(gradesArr){
  // up here we're modyinfing the grades variable that's the agrument
  gradesArr.push(55); 
  //  if you give a new value it won't work
  // this is essentially a new variable
   //grades = [ 12 , 79 ]  ; 
   debugger; 
}

addGrades(grades); 
console.log(grades); 

