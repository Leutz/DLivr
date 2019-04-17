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

  pickupHours = [];
  pickupDay : string = "";
  pickupStartHour: string = "";
  pickupEndHour: string = "";

  selectedPackage = [{
    "number": 0
  }]

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
    
    var divNoPackage = document.getElementById("text");
    var divDriverText = document.getElementById("textDriver")
    var divAdd = document.getElementById("addPackage");
    var buttonAdd = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");
    
    console.log(buttonAdd.textContent);

    this.closeExistingPackage();

    divtextDriver2.style.display = "none";

    if (buttonAdd.textContent == "Add Package")
    {
      divNoPackage.style.display = "none";
      divAdd.style.display = "block";
      buttonAdd.textContent = "Confirm";
      divDriverText.style.display = "block";
    }
    else
    {
      buttonAdd.textContent = "Add Package";
      divDriverText.style.display = "none";

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


  editPackageForm(i){
    var divEdit = document.getElementById("editPackage");
    var buttonEdit = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");

    this.closeExistingPackage();

    divEdit.style.display = "block";
    buttonEdit.textContent = "Save";
    divtextDriver2.style.display = "block";

    this.selectedPackage = this.packages[i - 1];
    console.log("i = " + i);
    console.log("Name = " + this.selectedPackage["name"]);
    console.log("Number = " + this.selectedPackage["number"]);
  }


  deletePackage(i){

    this.packages.splice(i - 1, 1);
    console.log("delete package " + (i - 1).toString());
    
    for (var x = i - 1; x < this.packages.length ; x++)
    {
      this.packages[x].number--;
    }

  }

  cancelEdit(){

    var divEdit = document.getElementById("editPackage");
    var buttonEdit = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");

    this.closeExistingPackage();

    buttonEdit.textContent = "Add Package";
    divtextDriver2.style.display = "none";
  }

  dontSaveEditPackage(){
    var buttonEdit = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");

      this.closeExistingPackage();

    buttonEdit.textContent = "Add Package";
    divtextDriver2.style.display = "none";
  }

  dontAddPackage(){
    var buttonAddPackage = document.getElementById("addpackage");
    var divDriverText = document.getElementById("textDriver");
    this.closeExistingPackage();

    buttonAddPackage.textContent = "Add Package";
    divDriverText.style.display = "none";
  }

  addPickupHour()
  { 
    this.pushItemTime(
    this.pickupDay,
    this.pickupStartHour,
    this.pickupEndHour
    );
    
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

  pushItemTime(pickupDay, pickupStartHour, pickupEndHour){
    this.pickupHours.push(
      {
        // name (as string) : actual value
        "pickupDay" : pickupDay,
        "pickupStartHour" : pickupStartHour,
        "pickupEndHour" : pickupEndHour,
      }
    )
  };
}
