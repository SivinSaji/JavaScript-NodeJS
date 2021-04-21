//OBJECT CONSTRUCTOR
//This is the basic model
function person(Name,Age,Place){
    this.Name=Name
    this.Age=Age
    this.Place=Place
    this.display=function(){
        console.log("Name:"+this.Name+" Age:"+this.Age+" Place:"+this.Place+" College:"+this.College)
    }
}

//Here we use base model
var sivin=new person("Sivin",20,"Kallumpuram")
var sanu=new person("Sanu",19,"kadavallur")

sivin.Age=40 //we update Age
sanu.College="BC" //new field added

sivin.display()
sanu.display()