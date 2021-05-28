class Car {
    constructor(name, year) {
      this.name = name;
        this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
}
class Dat{
    static a=this.a
    constructor() {
       this.my()
    }
    my() {
        for (var i = 0; i < 5; i++) {
            this.myCar = new Car("Ford", i + 2000);
            this.btn = document.createElement("button")
            this.btn.innerHTML = this.myCar.age()
            // "My car is " + this.myCar.age() + " years old.";
            this.btn.a = this.myCar.age()
            this.btn.onclick =this.lol 
            document.body.appendChild(this.btn)
            //console.log(this.a)
        }
        
    }
    lol() {
        console.log(this.a)
        }
}
var d=new Dat()