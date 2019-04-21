import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypackagesdriver',
  templateUrl: './mypackagesdriver.page.html',
  styleUrls: ['./mypackagesdriver.page.scss'],
})
export class MypackagesdriverPage implements OnInit {

  packages = [];

  constructor() 
  {
    this.packages = JSON.parse(localStorage.getItem("mypackages.packages"));
    console.log("packages: " + JSON.stringify(this.packages[0].pickupAddress));
  }

  ngOnInit() {
  }

}
