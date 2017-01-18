class Dog {
    constructor(name){}
}
class Husky extends Dog {
    constructor(name){
        super(name + "Go dawgs");
    }
}



(dog as Husky).throwFootball();

interface VisaAcceptor {
   secret:string;
   //takes in the card number, returns Receipt object
   payWithVisa(cardNum:number);
}

interface PaymentAcceptor {
    acceptsPayment(payment:Payment)
}

interface Acceptor {
    accepts(thing:Acceptable)
}

export class CoffeeShop implements VisaAcceptor {
   private secret:string = "Abracadabra";
   payWithVisa(cardNum:number) { /* ... */ }
}

class CharityDrive implements VisaAcceptor {
   payWithVisa(cardNum:number):Receipt { /* ... */ }
}