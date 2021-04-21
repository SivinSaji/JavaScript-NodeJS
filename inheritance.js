//In inheritance there 2 types of class one is parent class and child class.In child we will get all the functions and varriable in parrent class 
//Child class include functions and varriable of child class and parrent class
class sample{                                 //it is the parent class
    hey(){
        console.log("I am base class Hey")   //parent class hey function
    }
}

class hello extends sample{                  //child class
    hi(){                                    //child class hi function
        console.log("I am child class hi")
    }
}
let obb=new hello                             //objected created to child class 
obb.hi()
obb.hey()                                    //here we can access the function in parent class