import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mypackages',
  templateUrl: './mypackages.page.html',
  styleUrls: ['./mypackages.page.scss'],
})
export class MypackagesPage implements OnInit {

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
    
    console.log("hello I have the horse teeth");
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
}
