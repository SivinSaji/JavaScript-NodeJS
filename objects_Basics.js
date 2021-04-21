//PRINTING OBJECTS
var person={Name:"Sivin", Age:"20",Place:"kallumpuram"}
console.log(person)
console.log(person.Name)
console.log(person['Age']+'\n')

//printing obeject person using forloop
for(x in person){
    console.log(x+": "+person[x])

}


//Here we replace Name in object Person Sivin to Nikhil Killivayil
person.Name="Nikhil Killivayil"
console.log('\n')
console.log(person)
console.log(person.Name)

//Here we add a new property to object Person that is Date of Birth
person.dob="22-08-2000"
console.log(person)