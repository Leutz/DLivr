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
     // x.style.display = "block";

      if (window.getComputedStyle(x).display === 'block') {
        x.style.display = "none";
       // y.style.visibility = "hidden";
        return;
      }
      // Otherwise, show it
      x.style.display = "block";
      y.style.display = "none";
  }

  cancel(){
    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");

     x.style.display = "none";
     y.style.display = "block";
  }

}
