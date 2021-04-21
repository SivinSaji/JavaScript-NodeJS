//OBJECT CONSTRUCTOR
//This is the basic model
function person(Name,Age,Place){
    this.Name=Name
    this.Age=Age
    this.Place=Place
    this.College=this.College
    this.display=function(){
        console.log("Name:"+this.Name+" Age:"+this.Age+" Place:"+this.Place+" College:"+this.College)
    }
}

//Here we use base model
var sivin=new person("Sivin",20,"Kallumpuram")
var akhil=new person("Akhil",19,"Ponnani")

sivin.Age=40 //we update Age
akhil.College="MD" //new field added

sivin.display()
akhil.display()