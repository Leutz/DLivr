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

  id : string = "";
  pickupDay : string = "";
  pickupStartHour: string = "";
  pickupEndHour: string = "";

  selectedPackage = [];

  selectedpickupHours = [
    {
      "id": 0,
      "pickupDay" : "",
      "pickupStartHour" : "",
      "pickupEndHour" : "",
    }
  ]

  constructor(private menuCtrl: MenuController) { 
    this.pickupHours.push(
      {
        "pickupDay" : "",
        "pickupStartHour" : "",
        "pickupEndHour" : "",
      }
    );
  }

  ngOnInit() {
  }

  // close addPackage page/ editPackage page
  closeExistingPackage() {
    var divAdd = document.getElementById("addPackage");
    var buttonAdd = document.getElementById("addpackage");

    var divEdit = document.getElementById("editPackage");

    divAdd.style.display = "none";
    divEdit.style.display = "none";

    //buttonAdd.textContent = "Add Package";
  }

  clearAddPackageInputs()
  {
    this.name = "";
    this.pickupAddress = "";
    this.deliveryAddress = "";
    this.receiverName = "";
    this.receiverPhoneNumber = "";
    this.pickupHours.splice(0, this.pickupHours.length);
    this.pickupHours.push(
      {
        "pickupDay" : "",
        "pickupStart" : "",
        "pickupEnd" : "",
      }
    );
  }

  setAddPackageInputs(pack)
  {
    this.name = pack.name;
    this.pickupAddress = pack.pickupAddress;
    this.deliveryAddress = pack.deliveryAddress;
    this.receiverName = pack.receiverName;
    this.receiverPhoneNumber = pack.receiverPhoneNumber;
    this.pickupHours = pack.pickupHours.concat();
  }

  // addPackage form
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
    else // Confirm
    {
      buttonAdd.textContent = "Add Package";
      divDriverText.style.display = "none";

      this.pickupHours.forEach(pickupHour => {
        console.log(pickupHour);
      });

      this.pushCard(
        this.name, 
        this.pickupAddress,
        this.deliveryAddress,
        this.receiverName,
        this.receiverPhoneNumber,
        this.pickupHours
      );
    }
  }


  // editPackage form
  editPackageForm(i){
    var divEdit = document.getElementById("editPackage");
    var buttonEdit = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");

    this.closeExistingPackage();

    divEdit.style.display = "block";
    buttonEdit.textContent = "Save";
    divtextDriver2.style.display = "block";

    this.selectedPackage = this.packages[i - 1];
    console.log("editPackageForm: ");
    console.log("i = " + i);
    console.log("Name = " + this.selectedPackage["name"]);
    console.log("Number = " + this.selectedPackage["number"]);

    var pickupHours = this.selectedPackage["pickupHours"];

    pickupHours.forEach(element => {
      console.log(element);
    });

    this.clearAddPackageInputs();
    this.setAddPackageInputs(this.selectedPackage);
  }


  // delete a package in addPackage page
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

    // cancel edit in editPackage
   dontSaveEditPackage(){
    var buttonEdit = document.getElementById("addpackage");
    var divtextDriver2 = document.getElementById("textDriver2");

    this.closeExistingPackage();

    buttonEdit.textContent = "Add Package";
    divtextDriver2.style.display = "none";

    this.clearAddPackageInputs();
  }

  // cancel addPackage
  dontAddPackage(){
    var buttonAddPackage = document.getElementById("addpackage");
    var divDriverText = document.getElementById("textDriver");
    this.closeExistingPackage();

    buttonAddPackage.textContent = "Add Package";
    divDriverText.style.display = "none";

    this.clearAddPackageInputs();
  }

  // add pickup hour ng
  addPickupHour()
  { 
    this.addPickupItem();
  }

  pushCard(name, pickupAddress, deliveryAddress, receiverName, receiverPhoneNumber, pickupHours){

    this.packages.push(
      {
        "number": (this.packages.length + 1).toString(),
        "name": name,
        "status": "",
        "pickupAddress": pickupAddress,
        "deliveryAddress": deliveryAddress,
        "receiverName": receiverName,
        "receiverPhoneNumber": receiverPhoneNumber,
        "pickupHours": pickupHours.concat(), // create a copy of the array
        // We need to do this because putting just pickupHours here is just a reference (pointer) to the pickupHours
        // array. The next time the form is cleared, the pickupHours array will also be cleared, which would mean this reference would
        // be empty.
      }
    );

    //console.log(JSON.stringify(this.packages));

    localStorage.setItem("mypackages.packages", JSON.stringify(this.packages));

    this.clearAddPackageInputs();
  }

  addPickupItem(){
    this.pickupHours.push(
      {
        // name (as string) : actual value
        // "id" : (this.selectedpickupHours.length + 1).toString(),
        "pickupDay" : "",
        "pickupStartHour" : "",
        "pickupEndHour" : "",
      }
    );
  }

/*
  deleteHoursForm(i)
  {
     var divtimeItem = document.getElementById("timeItem");

     divtimeItem.style.display = "none";
     i++;
  }
  */
}
