//constructor in javascript

class Human{
    //properties or data members
    age; //public 
    weight;
    height;

    constructor(newAge,newHt,newWt){
        this.age=newAge;
        this.weight=newWt;
        this.height=newHt;
    }


    //behaviour or member function
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log("I am running");
    }

}
let obj1=new Human(25,80,160);//object creation
console.log(obj1.age);
console.log(obj1.weight);
console.log(obj1.height);
