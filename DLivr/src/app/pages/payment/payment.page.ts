import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(){
    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var z = document.getElementById("cards");
    
    
      // Otherwise, show it
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    
  }

  cancel(){

    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var z = document.getElementById("cards");
    var w = document.getElementById("pCardNumber");

     x.style.display = "none";
     y.style.display = "block";
     z.style.display = "block";
     w.style.display = "none";

     (<HTMLInputElement>document.getElementById('cardNumber')).value= "";
     (<HTMLInputElement>document.getElementById('date')).value= "";
     (<HTMLInputElement>document.getElementById('cvv')).value= "";
     (<HTMLInputElement>document.getElementById('country')).value= "";
     (<HTMLInputElement>document.getElementById('zipcode')).value= "";
     
  }
  // cancelEdit(){
  //   var e = document.getElementById("edit");
  //   e.style.display = "none";
  // }
  
  save(){
    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var w = document.getElementById("pCardNumber");
    var e = document.getElementById("edit");
    var del = document.getElementById("delete");
    var exit = document.getElementById("cancelEdit");
    var str1 = "**** ";

    // var button = document.createElement("button");
    // button.innerHTML = "Edit";
    // button.style.backgroundColor = "transparent";
    // button.style.outline = "none";

    // button.addEventListener ("click", function() {
    //   e.style.display = "block";
    
    // //  button.innerHTML = "";
    //   button.appendChild(e);
    //   // button.appendChild(exit);
    // });
    // exit.addEventListener ("click", function(){
      
    //   del.style.display = "none";
    //   exit.style.display = "none";
    //  // 
    //   button.innerHTML = "Edit";
    //   button.style.display = "block";

    // });

      var listOfCards = document.getElementById('cards');
      var cardNr = (<HTMLInputElement>document.getElementById('cardNumber')).value;

      if(cardNr && cardNr.length==19){
        var subst4 = cardNr.substring(cardNr.length - 4, cardNr.length);
        var result = str1.concat(subst4);
        var entry = document.createElement('ion-item');
        entry.appendChild(document.createTextNode(result));
        
       // entry.appendChild(button);
        entry.style.color = "grey";
     
        listOfCards.appendChild(entry);
       // listOfCards.appendChild(button);
        var br = document.createElement("br");
        listOfCards.appendChild(br);
        entry.addEventListener("click", function(){
       // alert("edit");
       if(e.style.display = "none"){
        e.style.display = "block";
        entry.appendChild(e);
       } else {
        e.style.display = "none";
        entry.removeChild(e);
       }
      
        });
        // exit.addEventListener("click", function(){
        //   // alert("edit");
        //    var str2 = "";
        //   entry.replaceChild(del,e);
        //    });

        //button.style.backgroundColor= "transparent";
        //button.style.color = "grey";
        //button.style.cssFloat = "right";
        entry.style.display = "inline-block";
        //button.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "block";
        listOfCards.style.display = "block";
        w.style.display = "none";
      
        
        (<HTMLInputElement>document.getElementById('cardNumber')).value= "";
        (<HTMLInputElement>document.getElementById('date')).value= "";
        (<HTMLInputElement>document.getElementById('cvv')).value= "";
        (<HTMLInputElement>document.getElementById('country')).value= "";
        (<HTMLInputElement>document.getElementById('zipcode')).value= "";
        (<HTMLInputElement>document.getElementById('e')).value= "";

      }else{
        x.style.display = "block";
        y.style.display = "none";
        listOfCards.style.display = "none";
        w.style.display = "block";
      }
  }

}
