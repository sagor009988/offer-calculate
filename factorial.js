// give the offer on ticket or other element system

/*
first 100 ticket price=100tk;
2nd 100 ticket price=90tk;
rest ticket price/more 200 ticket price=70tk;
*/ 
 function calculatePrice(Quantity){
     const first100Price=100;
     const second100Price=90;
     const restTicketPrice=70;
     if(Quantity<=100){
        const price=Quantity*first100Price;
        return price
     }else if(Quantity>100 && Quantity <=200){
        const pricefirst100=100*first100Price;
        const restquantityMore100=Quantity-100;
        const restquantityMore100Price=restquantityMore100*90;
        const totalPrice=pricefirst100+restquantityMore100Price;
        return totalPrice;
     }else{
        const first100Ticket=100*first100Price;
        const second100Ticket=100*second100Price;
        const restTicketQuantity=Quantity-200;
        const restTicketPrice=restTicketQuantity*70;
        const subTotal=first100Ticket+second100Ticket+restTicketPrice;
        return subTotal;
     }

 }
 const myTotalPrice=calculatePrice(220);
 console.log(myTotalPrice);