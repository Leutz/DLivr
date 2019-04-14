import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mypackages',
  templateUrl: './mypackages.page.html',
  styleUrls: ['./mypackages.page.scss'],
})
export class MypackagesPage implements OnInit {

  packages = [];

  name: string = "";
  pickupAddress: string = "";
  deliveryAddress: string = "";
  receiverName: string = "";
  receiverPhoneNumber: string = "";

  constructor(private menuCtrl: MenuController) { 
  }

  ngOnInit() {
  }

  closeExistingPackage() {
    var divAdd = document.getElementById("addPackage");
    var buttonAdd = document.getElementById("addpackage");

    var divEdit = document.getElementById("editPackage");

    divAdd.style.display = "none";
    divEdit.style.display = "none";

    //buttonAdd.textContent = "Add Package";
  }

  addPackageButton(){
    
    var divAdd = document.getElementById("addPackage");
    var buttonAdd = document.getElementById("addpackage");
    
    console.log(buttonAdd.textContent);

    this.closeExistingPackage();

    if (buttonAdd.textContent == "Add Package")
    {
      divAdd.style.display = "block";
      buttonAdd.textContent = "Confirm";
    }
    else
    {
      buttonAdd.textContent = "Add Package";

      var nameInput = document.getElementById("nameInput");
      var pickupAddressInput = document.getElementById("pickupAddressInput");
      var deliveryAddressInput = document.getElementById("deliveryAddressInput");

      var receiverName = document.getElementById("receiverName");
      var receiverPhoneNumber = document.getElementById("receiverPhoneNumber");

      this.pushCard(
        this.name, 
        this.pickupAddress,
        this.deliveryAddress,
        this.receiverName,
        this.receiverPhoneNumber
      );
    }
  }

  editPackageForm(){
    var divEdit = document.getElementById("editPackage");
    var buttonEdit = document.getElementById("addpackage");

    this.closeExistingPackage();

    divEdit.style.display = "block";
    buttonEdit.textContent = "Save";
  }

  cancelEdit(){

    var divEdit = document.getElementById("editPackage");
    var buttonEdit = document.getElementById("addpackage");

    this.closeExistingPackage();

    buttonEdit.textContent = "Add Package"
  }

  pushCard(name, pickupAddress, deliveryAddress, receivedName, receiverPhoneNumber){

    console.log("Name: " + name);

    this.packages.push(
      {
        "number": (this.packages.length + 1).toString(),
        "name": name,
        "status": "",
        "pickupAddress": pickupAddress,
        "deliveryAddress": deliveryAddress,
        "receivedName": receivedName,
        "receiverPhoneNumber": receiverPhoneNumber,
        //"pickupHours": pickupHours,
      }
    );
    
    this.name = "";
    this.pickupAddress = "";
    this.deliveryAddress = "";
    this.receiverName = "";
    this.receiverPhoneNumber = "";
  }

  /*functionDO(){
    this.packages.push(
      {
        "number": (this.packages.length + 1).toString(),
        "name": "<Name>",
        "status": "<Status>",

        // etc stuff here
      }
    )
  }*/
}
