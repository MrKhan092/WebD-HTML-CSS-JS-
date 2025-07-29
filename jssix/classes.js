class Human{
    //properties or data members
    age=25; //public 
    weight=12;
    height=160;


    //behaviour or member function
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log("I am running");
    }

}
let obj1=new Human();//object creation
console.log(obj1.age);
obj1.walking();