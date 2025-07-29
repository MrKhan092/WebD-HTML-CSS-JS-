//getter and settter
class Human{
    age=25;
    #wt=80;
    ht=160;
    walking(){
        console.log("i am walikin");
    }
    get fetchweight(){
        return this.#wt;
    }
    set modify(val){
        this.#wt=val;
    }
}
let obj1=new Human();
obj1.modify=90;
 console.log(obj1.fetchweight);
