//We can also add Methods/Function to a Object
var person={Name:"Sivin", Age:20,Place:"kallumpuram",display:function(){
    var Name="Akhil"
    
    console.log(this.Name)
    console.log(Name)
    console.log(this.Age)
}}
person.display()

//We can also add a new Methods/Function to a existing  Object here we add new function displayPerson to objet Person
person.displayPlace=function(){
    console.log(person.Place)
}
person.displayPlace()
